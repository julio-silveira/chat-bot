
export type  ResponseType = 'SINGLE' | 'OPTIONS'

export enum ResponseEnum {
  SINGLE = 0,
  OPTIONS = 1,
}

export type AuthenticationStage = 'NONE' | 'USER' | 'PASSWORD' | 'FINISHED'

export enum AuthenticationStageEnum {
  NONE = 0,
  USER = 1,
  PASSWORD = 2,
  FINISHED = 3,
}

export type MessageResponse = {
  id: number
  requestMessage: string
  responseMessage: string
  requestTime: Date
  responseTime: Date
  responseType: ResponseType
  conversationId: number
  nextAuthenticationStage: AuthenticationStage | null
  accessToken: string | null
}

export type LocalMessage = {
  content: string
  time: Date
  type: 'request' | 'response'
}

export type MessageRequest = {
  request_message: string
  request_time: string
  conversation_id: number | null
  authentication_stage:  AuthenticationStage | null
}
