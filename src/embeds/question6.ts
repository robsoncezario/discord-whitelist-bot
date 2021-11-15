import { MessageEmbed } from 'discord.js'

export const embed = new MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pergunta #6')
	.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setDescription('Oque é powerRP?\n\n`1`- Subir o chilliad de Faggio.\n`2`- Subir uma montanha de Akuma.\n`3`- Forçar RP com alguem afim de começar uma ação.\n`4`- Um RP forte.\n`5`- Um RP dificil.')
	.addFields([
		{
			name: '\nReaja abaixo com o número da alternativa',
			value: 'Tenha em mente que apenas uma alternativa delas é a correta.'
		}
	])
	.setTimestamp()
export const answers = [3]