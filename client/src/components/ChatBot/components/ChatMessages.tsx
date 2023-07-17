import { Stack } from '@mui/material';
import { Message } from '../ChatBot';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';

type Props = {
  messages: Message[];
}

export default function ChatMessages({messages}: Props) {
  return (
    <Stack sx={{height: 300, overflowX: 'hidden', overflowY: 'scroll', px: 1}} spacing={2}>
      {messages.map((message) => (
        <Stack key={message.id} direction="row">
            {message.sender === 'bot'
              ? <BotMessage message={message.message} />
              : <UserMessage message={message.message} />}
          </Stack>
      ))}
    </Stack>
  )
}
