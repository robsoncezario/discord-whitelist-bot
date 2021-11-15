import { 
	Guild, 
	User,
	TextChannel,
	Message
} from 'discord.js';
import CacheService from '../CacheService';
import ChannelService from '../ChannelService'
import QuestionService from '../QuestionService'
import resultEmbed from '../../embeds/result' 

export default class WhitelistService {
	static async start(server: Guild, user: User) {
		const cacheKey = '@whitelist/failed/' + user.id 

		if(CacheService.has(cacheKey) === false) {
			const textChannel: TextChannel | undefined = await ChannelService.create(server, user)

			if (textChannel) {
				await QuestionService.create(0, textChannel, user)
			}
		}
	}

	static async complete(textChannel: TextChannel, user: User) {
		const cacheKey = '@whitelist/' + user.id 
		const value = CacheService.get(cacheKey) as any[]
		const rightCount = value.filter(q => q.right === true).length
		const wrongCount = value.filter(q => q.right === false).length
		const approved = rightCount >= 7 

		const message: Message = await textChannel.send({
			embeds: [resultEmbed(rightCount, wrongCount)]
		})

		if(approved) {
			await textChannel
				.members
				.get(user.id)
				?.roles
				?.add(process.env.WHITELIST_ROLE_ID as string)
		} else {
			const cacheKey = '@whitelist/failed/' + user.id 

			CacheService.set(cacheKey, true, (60 * 60) * 24)
		}

		setTimeout(() => {
			async function deleteChannel() {
				await textChannel.delete()
			}
		}, 60000)

		await message.react(approved ? '✅' : '❌')
	}
}