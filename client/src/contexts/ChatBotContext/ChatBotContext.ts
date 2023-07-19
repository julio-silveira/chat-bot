import { LocalMessage } from '@/services/http'
import { createContext } from 'react'

export type ChatBotContextData = {
  chatMessages: LocalMessage[],
  sendMessageToBot: (message: string) => void,
  awaitingResponse: boolean,
  userId: number  | null,
  logout: () => void,
}
const ChatBotContext = createContext({} as ChatBotContextData)

export default ChatBotContext
