import { MessageEmbed } from 'discord.js'

export const embed = new MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pergunta #7')
	.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setDescription('Caso você chegue **recentemente** e não saiba como faz pra **trabalhar** oque **você faz**?\n\n`1`- Vou no discord e peço por ajuda.\n`2`- Procuro por alguém na cidade e peço informação.\n`3`- Vou no privado do Administrador perguntar.\n`4`- faço um chamado pra deus.\n`5`- f8 quit.')
	.addFields([
		{
			name: '\nReaja abaixo com o número da alternativa',
			value: 'Tenha em mente que apenas uma alternativa delas é a correta.'
		}
	])
	.setTimestamp()
export const answers = [2]