import { Stack } from '@mui/material';
import { Message } from '../ChatBot';
import MessageContent from './MessageContent';

type Props = {
  messages: Message[];
}

export default function ChatMessages({messages}: Props) {
  return (
    <Stack sx={{height: 300, overflowX: 'hidden', overflowY: 'scroll', px: 1}} spacing={2}>
      {messages.map((message) => (
        <MessageContent key={message.id} message={message} />
      ))}
    </Stack>
  )
}
