import { LocalMessage } from '@/services/http'
import { createContext } from 'react'

export type ChatBotContextData = {
  chatMessages: LocalMessage[],
  sendMessageToBot: (message: string) => void,
  awaitingResponse: boolean,
}
const ChatBotContext = createContext({} as ChatBotContextData)

export default ChatBotContext
