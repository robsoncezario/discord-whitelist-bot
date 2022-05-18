import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Pergunta #9")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "Qual alternativa é **incorreta**?\n\n`1`- Quando um jogador é reanimado ou curado no hospital ele fica proibido de voltar para qualquer tipo de ação nos próximos 10 minutos.\n`2`- Os personagens não podem compartilhar nada, casa, carro, dinheiro nem informações.\n`3`- Não é permitido utilizar armas de fogos do emprego para atirar em outros jogadores. (mosquete) sujeito a BAN.\n`4`- Um jogador só pode ser banido se acumular 3 Advertências.\n`5`- É proibido o uso de linguagem ofensiva, racista, LGBTQfóbica e publicação de material calunioso, abusivo ou que invada a privacidade de alguém."
  )
  .addFields([
    {
      name: "\nReaja abaixo com o número da alternativa",
      value: "Tenha em mente que apenas uma alternativa delas é a correta.",
    },
  ])
  .setTimestamp();
export const answers = [4];
