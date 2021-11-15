import { MessageEmbed } from 'discord.js'

export const embed = new MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pergunta #2')
	.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setDescription('Você está com uma moto *(Akuma)* e acaba sendo perseguido, porem você está em uma região **rural**, oque você faz para **fugir**?\n\n`1`- Finjo que buguei e dou quit.\n`2`- Paro e me rendo.\n`3`- Tranco a moto me jogo no mato e finjo de morto.\n`4`- Vou pro meio do mato e meto fuga.\n`5`- Vou pra cidade e dou fuga pelos becos.')
	.addFields([
		{
			name: '\nReaja abaixo com o número da alternativa',
			value: 'Tenha em mente que apenas uma alternativa delas é a correta.'
		}
	])
	.setTimestamp()
export const answers = [2, 5]