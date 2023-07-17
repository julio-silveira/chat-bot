import { Box, Collapse, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ToggleChatBtn from './components/ToggleChatBtn';
import ChatMessages from './components/ChatMessages';


export type Message = {
  id: number;
  message: string;
  sender: 'bot' | 'user';
}

const messages: Message[] = [{
  id: 1,
  message: 'Hello',
  sender: 'bot'
}, {
  id: 2,
  message: 'Hello',
  sender: 'user'
}, {
  id: 3,
  message: 'Hello',
  sender: 'bot'
}, {
  id: 4,
  message: 'Hello',
  sender: 'user'
}, {
  id: 5,
  message: 'Hello',
  sender: 'bot'
}, {
  id: 6,
  message: 'Hello',
  sender: 'user'
}
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Box sx={{position: 'absolute', right: 0, bottom: 0, overflow: 'hidden', width: {xs: '100%', md: 400}}}>
      <ToggleChatBtn toggleModal={toggleModal} />
      <Collapse mountOnEnter unmountOnExit in={isOpen}>
        <Stack spacing={1} sx={{p: 1, border: '2px solid #f2f2f2', borderTop: 'none', width: '95%'}} >
          <ChatMessages messages={messages} />
          <TextField fullWidth size='small' />
        </Stack>
      </Collapse>
    </Box>
    )
}
