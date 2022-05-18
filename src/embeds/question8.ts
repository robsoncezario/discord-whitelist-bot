import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Pergunta #8")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "**Quais** são as áreas **safes** da cidade?\n\n`1`- Hospital, praça, mecânica, Concessionária, DP, Prefeitura, Garagem e locais de emprego.\n`2`- Hospital, Mecânica, prefeitura e praça.\n`3`- Praça\n`4`- Garagem\n`5`- Não tem área Safe."
  )
  .addFields([
    {
      name: "\nReaja abaixo com o número da alternativa",
      value: "Tenha em mente que apenas uma alternativa delas é a correta.",
    },
  ])
  .setTimestamp();
export const answers = [1];
