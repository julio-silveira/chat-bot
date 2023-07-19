import { ChatBotContext } from '@/contexts'
import { AuthenticationStageEnum, LocalMessage, MessageApi, ResponseEnum } from '@/services/http'
import { ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface ProviderProps {
  children: ReactNode
}


export function DialogProvider({ children }: ProviderProps) {
  const [conversationId, setConversationId] = useState<number | null>(null)
  const [userId, setUserId] = useState<number | null>(null) // TODO: [FUTURE] implement a secure authentication [FUTURE]
  const [authenticationStage, setAuthenticationStage] = useState<AuthenticationStageEnum>(AuthenticationStageEnum.NONE)
  const [chatMessages, setChatMessages] = useState<LocalMessage[]>(Array<LocalMessage>())
  const {mutate: sendMessage, data: receivedMessage, isLoading: awaitingResponse, reset: clearMessage} = MessageApi.useCreateMessage()

  const sendMessageToBot = async (message: string) => {
    if (awaitingResponse) {
      toast.error('Please wait for the bot to respond')
      return
    }
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
      authentication_stage: authenticationStage,
      user_id: userId
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
      if (receivedMessage.user_id) {
        setUserId(receivedMessage.user_id)
      }
      if (receivedMessage.next_authentication_stage) {
        setAuthenticationStage(receivedMessage.next_authentication_stage)
      }

      if (receivedMessage.response_type === ResponseEnum.OPTIONS) {
        newMessage.isMulti = true
      }

      if(receivedMessage.is_finished) {
        setConversationId(null)
      }

      addNewChatMessage(newMessage)
    }
  }, [receivedMessage])

  const logout = () => {
    setConversationId(null)
    setUserId(null)
    setAuthenticationStage(AuthenticationStageEnum.NONE)
    setChatMessages(Array<LocalMessage>())
    clearMessage()
  }

  return (
    <ChatBotContext.Provider
      value={{
        chatMessages,
        sendMessageToBot,
        awaitingResponse,
        userId,
        logout
      }}
    >
      {children}
    </ChatBotContext.Provider>
  )
}

export default DialogProvider
