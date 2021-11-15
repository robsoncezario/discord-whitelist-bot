import { 
	Client,
	MessageButton,
	MessageActionRow,
	Guild,
	User,
	GuildChannel,
	ThreadChannel,
	TextChannel
} from 'discord.js' 
import whitelistEmbed from '../../embeds/whitelist'
import CacheService from '../CacheService'

export default class ChannelService {
	static async create(server: Guild, user: User): Promise<TextChannel | undefined> {
		try {
			const nameOfChannel = `whitelist-${user.id}`
			const exists: GuildChannel | ThreadChannel | undefined = server.channels.cache.find(c => c.name == nameOfChannel) 
	
			if(exists !== undefined) {
				await exists.delete()
			}

			const cacheKey = '@whitelist/' + user.id 

			CacheService.set(cacheKey, [], 99999)
	
			return await server.channels.create(nameOfChannel, {
				type: 'GUILD_TEXT',
				permissionOverwrites: [
					{
						id: server.id, 
						deny: 'VIEW_CHANNEL'
					},
					{
						id: user.id,
						allow: 'VIEW_CHANNEL'
					}
				]
			})
		} catch {
			return undefined 
		}
	}

	static async prepare(client: Client) {
		const channel = client!.channels!.cache!.get(process.env.WHITELIST_CHANNEL_ID as string) as TextChannel
		var message = null 

		if (channel) {
			try {
				message = await channel.messages.fetch(process.env.WHITELIST_MESSAGE_ID as string)
				message.pin()
			} catch {
				const row = new MessageActionRow()
					.addComponents([
						new MessageButton()
							.setCustomId('whitelist-btn')
							.setLabel('Fazer whitelist')
							.setStyle('SUCCESS')
					])

				message = await channel.send({ 
					embeds: [whitelistEmbed],
					components: [row]
				})
			} finally {
				if(message) {
					const collector = message.createMessageComponentCollector({
						filter: i => i.customId == 'whitelist-btn'
					})
	
					collector.on('collect', async i => {
						if (i.customId === 'whitelist-btn') {
							await i.update({ });
						}
					})
				}
			}
		}
	}
}