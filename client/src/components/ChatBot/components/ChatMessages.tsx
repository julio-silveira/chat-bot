import { Stack } from '@mui/material';
import MessageContent from './MessageContent';
import { useContext } from 'react';
import { ChatBotContext } from '@/contexts';


export default function ChatMessages() {
  const {chatMessages} = useContext(ChatBotContext)

  return (
    <Stack sx={{height: 300, overflowX: 'hidden', overflowY: 'scroll', px: 1}} spacing={2}>
      {chatMessages.map((message, index) => (
        <MessageContent key={index} message={message} />
      ))}
    </Stack>
  )
}
