import { Box, Collapse, Stack } from '@mui/material';
import { useState } from 'react';
import ToggleChatBtn from './components/ToggleChatBtn';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';


export type Message = {
  id: number;
  message: string;
  sender: 'bot' | 'user';
  date: Date;
}

const messages: Message[] = [{
  id: 1,
  message: 'Hello',
  sender: 'bot',
  date: new Date()
}, {
  id: 2,
  message: 'Hello',
  sender: 'user',
  date: new Date()
}, {
  id: 3,
  message: 'Hello',
  sender: 'bot',
  date: new Date()

}, {
  id: 4,
  message: 'Hello',
  sender: 'user',
  date: new Date()

}, {
  id: 5,
  message: 'HelloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHelloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHelloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  sender: 'bot',
  date: new Date()

}, {
  id: 6,
  message: 'Hello',
  sender: 'user',
  date: new Date()
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
      <Collapse
        mountOnEnter
        unmountOnExit
        in={isOpen}
      >
        <Stack
          spacing={1}
          sx={{p: 1, border: '2px solid #E0E0E0',
          borderTop: 'none', width: '95%'}}
        >
          <ChatMessages messages={messages} />
          <ChatInput onSendMessage={(message: string) =>  console.log(message)} />
        </Stack>
      </Collapse>
    </Box>
    )
}
