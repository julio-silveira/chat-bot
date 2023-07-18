import { createContext } from 'react'

export type ChatBotContextData = {
  isOpen: boolean
}
const ChatBotContext = createContext({} as ChatBotContextData)

export default ChatBotContext
