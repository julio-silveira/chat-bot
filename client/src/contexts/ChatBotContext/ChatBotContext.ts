import { LocalMessage } from '@/services/http'
import { createContext } from 'react'

export type ChatBotContextData = {
  chatMessages: LocalMessage[],
  addNewChatMessage: (message: LocalMessage) => void,
}
const ChatBotContext = createContext({} as ChatBotContextData)

export default ChatBotContext
