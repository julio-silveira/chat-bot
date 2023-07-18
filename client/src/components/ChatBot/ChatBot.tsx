import { Box, Collapse, Stack } from '@mui/material';
import { useState } from 'react';
import ToggleChatBtn from './components/ToggleChatBtn';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

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
          <ChatMessages />
          <ChatInput />
        </Stack>
      </Collapse>
    </Box>
    )
}
