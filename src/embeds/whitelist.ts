import { MessageEmbed } from "discord.js";

export default new MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Whitelist")
  .setAuthor(
    "Haze Roleplay",
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setThumbnail(
    "https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif"
  )
  .setDescription(
    "**ATENÇÃO** Para fazer a nossa **Whitelist**, basta ser maior de **16 anos** e passar pelo processo a seguir. \n\nSua aprovação ou reprovação são **automáticas**, ao ser **aprovado** você ganha automaticamente o cargo @whitelisted e consegue conectar no servidor, se for **reprovado** terá que tentar novamente.\n\n`AVISO`\n\nUtilizamos uma maneira diferente de autenticação, totalmente pelo **discord**.\n\nCaso Tenha problemas pra conectar consulte o canal \n#🔌┃como-conectar ."
  )
  .addFields([
    {
      name: "Para **começar** nossa **whitelist** você deve **reagir** logo abaixo!",
      value: "Pode utilizar !whitelist também.",
    },
  ])
  .setTimestamp()
  .setFooter("Att \n\nEquipe Haze Roleplay");
