import { Client, Intents, Message } from "discord.js";
import dotenv from "dotenv";
import ChannelService from "./services/ChannelService";

import MessageService from "./services/MessageService";
import ReactionService from "./services/ReactionService";
import WhitelistService from "./services/WhitelistService";

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  ],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client!.user!.tag}!`);

  await ChannelService.prepare(client);
});

client.on("messageCreate", async (message: Message) => {
  MessageService.addCommands(message);
  await MessageService.filter(message);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "whitelist-btn") {
      if (interaction.guild !== null) {
        await WhitelistService.start(interaction.guild, interaction.user);
      }
    }
  }
});

client.on("messageReactionAdd", ReactionService.add);

client.login(process.env.BOT_TOKEN);
