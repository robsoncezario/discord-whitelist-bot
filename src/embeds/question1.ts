import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Pergunta #1")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "Você esta caminhando a pé e encontra uma **viatura** estacionada e **aberta**, oque você faria?\n\n`1`- Entraria nela e levaria a DP.\n`2`- Ignoraria e seguiria o meu caminho.\n`3`- Procuraria por alguém e se não encontrasse roubaria a VTR.\n`4`- Avisaria a policia que a viatura esta jogada na rua.\n`5`- Ligaria pra mecânica.\n"
  )
  .addFields([
    {
      name: "\nReaja abaixo com o número da alternativa",
      value: "Tenha em mente que apenas uma alternativa delas é a correta.",
    },
  ])
  .setTimestamp();
export const answers = [2, 4];
