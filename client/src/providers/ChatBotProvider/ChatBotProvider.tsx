import { ChatBotContext } from '@/contexts'
import { LocalMessage } from '@/services/http'
import { ReactNode, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}


export function DialogProvider({ children }: ProviderProps) {
  const [chatMessages, setChatMessages] = useState<LocalMessage[]>(Array<LocalMessage>())

  const addNewChatMessage = (newMessage: LocalMessage) => {
    setChatMessages([...chatMessages, newMessage])
  }

  return (
    <ChatBotContext.Provider
      value={{
        chatMessages,
        addNewChatMessage,

      }}
    >
      {children}
    </ChatBotContext.Provider>
  )
}

export default DialogProvider
