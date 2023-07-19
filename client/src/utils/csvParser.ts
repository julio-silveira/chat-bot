import { Conversations } from '@/services/http';

export const csvHeaders = [
  'id',
  'user_id',
  'username',
  'starting_date',
  'ending_date',
]

export const toCsv = (conversations: Conversations[] | undefined): string[][] => {
  if (!conversations || !conversations.length) return [csvHeaders]
  return [csvHeaders,...conversations.map(conversation => ConversationToCsv(conversation))]
}

export const ConversationToCsv = (conversation: Conversations): string[] =>  {
  return [
    conversation.id.toString(),
    conversation.user_id.toString(),
    conversation.user.username,
    conversation.starting_date,
    conversation.ending_date,
  ]
}
