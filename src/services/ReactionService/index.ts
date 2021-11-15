import {
	MessageReaction,
	User,
	PartialUser,
	PartialMessageReaction
} from 'discord.js'

export default class ReactionService {
	static async add(reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) {
		if (user.bot === false) {
			const { message } = reaction

			if (message.id == process.env.WHITELIST_MESSAGE_ID) {
				await reaction.remove()
			}
		}
	}
}