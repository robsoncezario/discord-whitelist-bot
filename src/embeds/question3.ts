import { MessageEmbed } from 'discord.js'

export const embed = new MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pergunta #3')
	.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
	.setDescription('Você está viajando de **carro** e acaba perdendo o controle e **batendo**, a batida foi forte você bateu a cabeça, porém seu carro continua **funcionando**, oque você faria?\n\n`1`- Estacionaria e ligaria pro mecânico em seguida dirigiria até o hospital.\n`2`- Continuaria a dirigir mas iria para o Hospital.\n`3`- Ligaria pra alguém me buscar e levar ao médico e pro mecânico consertar meu carro.\n`4`- Seguiria o meu caminho e iria depois ao HP/mec.\n`5`- Ligaria pro taxi e abandonaria o carro.')
	.addFields([
		{
			name: '\nReaja abaixo com o número da alternativa',
			value: 'Tenha em mente que apenas uma alternativa delas é a correta.'
		}
	])
	.setTimestamp()
export const answers = [3]