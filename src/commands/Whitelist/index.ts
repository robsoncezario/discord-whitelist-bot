import { 
	Message,
	Guild
} from 'discord.js'
import WhitelistService from '../../services/WhitelistService'

export default function WhitelistCommand(message: Message) {
	async function createWhitelistChannelAsync() {
		await WhitelistService.start(message.guild as Guild, message.author)
	}

	if(message.guild !== null) {
		createWhitelistChannelAsync()
	}
}