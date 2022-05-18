import { Message } from "discord.js";
import cmdList from "../../commands/index";

export default class MessageService {
  static addCommands(message: Message): void {
    try {
      if (message.content.startsWith(process.env.COMMAND_PREFIX as string)) {
        const args = message.content.split(/ +/);

        if (args.length >= 1) {
          const rawCommand = args
            .shift()!
            .toLowerCase()
            .slice((process.env.COMMAND_PREFIX as string).length);
          const command = cmdList.find((c) => c.label === rawCommand);

          if (command) {
            command.handler(message);
          }
        }
      }
    } catch {}
  }

  static async filter(message: Message) {
    try {
      if (
        message.channel.id == process.env.WHITELIST_CHANNEL_ID &&
        message.author.bot === false
      ) {
        await message.delete();
      }
    } catch {}
  }
}
