import { MessageEmbed } from 'discord.js'

export default function(rightCount: number, wrongCount: number) {
	const total = rightCount + wrongCount 
	const percent = (rightCount / total) * 100 
	const approved = percent >= 70

	return new MessageEmbed()
		.setColor(!approved ? 'DARK_RED' : 'DARK_GREEN')
		.setTitle('Resultado')
		.setAuthor('Haze Roleplay', 'https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
		.setThumbnail('https://media.discordapp.net/attachments/797925825126203432/905825097531674664/haze.gif')
		.setDescription(`**O seu total de acertos foi:**\n\n**${rightCount}** de **${total}**. Sua porcentagem de acertos foi de **${percent.toFixed(0)}%**.`)
		.addFields([
			{
				name: 'Seu resultado foi:',
				value: approved ? '**APROVADO**' : '**REPROVADO** (Tente novamente dentro de 24 horas)'
			}
		])
		.setTimestamp()
}