import { ChatBotContext } from '@/contexts'
import { ReactNode, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

export function DialogProvider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <ChatBotContext.Provider
      value={{
        isOpen,

      }}
    >
      {children}
    </ChatBotContext.Provider>
  )
}

export default DialogProvider
