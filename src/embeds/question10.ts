import { MessageEmbed } from 'discord.js'

export const embed = new MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pergunta #10')
	.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setDescription('Qual a **PRINCIPAL** Regra do **RP**?\n\n`1`- Se divertir.\n`2`- Trocar tiro.\n`3`- Bom senso.\n`4`- Agir como a vida real.\n`5`- Nenhuma das alternativas.\n')
	.addFields([
		{
			name: '\nReaja abaixo com o número da alternativa',
			value: 'Tenha em mente que apenas uma alternativa delas é a correta.'
		}
	])
	.setTimestamp()
export const answers = [3]