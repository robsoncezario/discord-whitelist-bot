import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Pergunta #5")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "Oque é CL? *(Combat Logging)*\n\n`1`- Desconectar em meio de uma ação e não retornar.\n`2`- Desconectar para não morrer.\n`3`- Puxar o modem da tomada e dizer que a energia caiu.\n`4`- Nenhuma alternativa esta correta.\n`5`- Todas as alternativas estão corretas."
  )
  .addFields([
    {
      name: "\nReaja abaixo com o número da alternativa",
      value: "Tenha em mente que apenas uma alternativa delas é a correta.",
    },
  ])
  .setTimestamp();
export const answers = [5];
