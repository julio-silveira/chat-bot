
export type  ResponseType = 'SINGLE' | 'OPTIONS'

export enum ResponseEnum {
  SINGLE = 0,
  OPTIONS = 1,
}

export type AuthenticationStage = ['NONE','USER','PASSWORD','FINISHED']

export enum AuthenticationStageEnum {
  NONE = 0,
  USER = 1,
  PASSWORD = 2,
  FINISHED = 3,
}

export type MessageResponse = {
  id: number
  request_message: string
  response_message: string
  request_time: Date
  response_time: Date
  response_type: ResponseEnum
  conversation_id: number
  nextAuthentication_stage: AuthenticationStageEnum | null
  access_token: string | null
}

export type LocalMessage = {
  content: string
  time: Date
  type: 'request' | 'response'
  isSecret?: boolean
  isMulti?: boolean
}

export type MessageRequest = {
  request_message: string
  request_time: string
  conversation_id: number | null
  authentication_stage:  AuthenticationStageEnum | null
}
