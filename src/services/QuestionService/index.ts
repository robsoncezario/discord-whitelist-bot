import {
  TextChannel,
  MessageActionRow,
  MessageButton,
  User,
  Message,
} from "discord.js";

import questionList from "../../embeds/questions";
import CacheService from "../CacheService";
import WhitelistService from "../WhitelistService";

export default class QuestionService {
  static emojis: string[] = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

  static async create(
    questionIndex: number,
    textChannel: TextChannel,
    user: User
  ) {
    const question = questionList[questionIndex];
    const row = new MessageActionRow().addComponents(
      [...Array(5).keys()].map((b) =>
        new MessageButton()
          .setCustomId("whitelist-question-" + (b + 1))
          .setLabel((b + 1).toString())
          .setStyle("PRIMARY")
      )
    );

    const message: Message = await textChannel.send({
      embeds: [question.embed],
      components: [row],
    });

    const buttonList: string[] = [...Array(5).keys()].map(
      (b) => "whitelist-question-" + (b + 1)
    );
    const collector = message.createMessageComponentCollector({
      filter: (i) => i.user.id === user.id && buttonList.includes(i.customId),
    });

    collector.on("collect", async (i) => {
      if (buttonList.includes(i.customId)) {
        await i.update({ components: [] });

        const index = parseInt(i.customId.replace(/\D/g, ""));
        const cacheKey = "@whitelist/" + user.id;
        const value = (CacheService.get(cacheKey) || []) as any[];

        CacheService.set(
          cacheKey,
          [
            ...value,
            {
              answerId: index,
              question: questionIndex,
              right: question.answers.includes(index),
            },
          ],
          99999999999999
        );

        await message.react(QuestionService.emojis[index - 1]);

        if (questionList[questionIndex + 1]) {
          await QuestionService.create(questionIndex + 1, textChannel, user);
        } else {
          await WhitelistService.complete(textChannel, user);
        }
      }
    });
  }
}
