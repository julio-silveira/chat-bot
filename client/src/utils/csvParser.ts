import { Conversations } from '@/services/http';



export const ConversationToCsv = (conversation: Conversations): string[] =>  {
  return [
    conversation.id.toString(),
    conversation.user_id.toString(),
    conversation.user.username,
    conversation.starting_date,
    conversation.ending_date,
  ]
}
