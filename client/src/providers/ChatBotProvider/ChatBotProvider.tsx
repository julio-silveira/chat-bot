import { ChatBotContext } from '@/contexts'
import { AuthenticationStageEnum, LocalMessage, MessageApi, ResponseEnum } from '@/services/http'
import { ReactNode, useEffect, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}


export function DialogProvider({ children }: ProviderProps) {
  const [conversationId, setConversationId] = useState<number | null>(null)
  const [authenticationStage, setAuthenticationStage] = useState<AuthenticationStageEnum>(AuthenticationStageEnum.NONE)
  const [chatMessages, setChatMessages] = useState<LocalMessage[]>(Array<LocalMessage>())
  const {mutate: sendMessage, data: receivedMessage, isLoading: awaitingResponse} = MessageApi.useCreateMessage()

  const sendMessageToBot = async (message: string) => {

    const isSecret = authenticationStage === AuthenticationStageEnum.PASSWORD

    const newMessageObject: LocalMessage = {
      content: message,
      time: new Date(),
      type: 'request',
      isSecret
    }

    sendMessage({
      request_message: newMessageObject.content,
      request_time: newMessageObject.time.toISOString(),
      conversation_id: conversationId,
      authentication_stage: authenticationStage
    })
    addNewChatMessage(newMessageObject)
  }

  const addNewChatMessage = async (newMessage: LocalMessage) => {
    setChatMessages([...chatMessages, newMessage])
  }

  useEffect(() => {
    if (receivedMessage) {
      const { response_message, response_time } = receivedMessage
      const newMessage: LocalMessage = {
        content: response_message,
        time: new Date(response_time),
        type: 'response'
      }
      if (receivedMessage.conversation_id) {
        setConversationId(receivedMessage.conversation_id)
      }
      if (receivedMessage.nextAuthentication_stage) {
        setAuthenticationStage(receivedMessage.nextAuthentication_stage)
      }

      if (receivedMessage.response_type === ResponseEnum.OPTIONS) {
        newMessage.isMulti = true
      }

      addNewChatMessage(newMessage)
    }
  }, [receivedMessage])

  return (
    <ChatBotContext.Provider
      value={{
        chatMessages,
        sendMessageToBot,
        awaitingResponse
      }}
    >
      {children}
    </ChatBotContext.Provider>
  )
}

export default DialogProvider
