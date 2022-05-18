import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Pergunta #4")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "Oque é Flaming RP?\n\n`1`- Matar alguem e incendiar o corpo.\n`2`- Matar Alguem e ficar xingando/cuspindo/dançando em cima do corpo.\n`3`- Matar alguem queimado.\n`4`- Zoar/caçoar do coleguinha.\n`5`- Incentivar uma pessoa a fazer ação com você."
  )
  .addFields([
    {
      name: "\nReaja abaixo com o número da alternativa",
      value: "Tenha em mente que apenas uma alternativa delas é a correta.",
    },
  ])
  .setTimestamp();
export const answers = [2];
