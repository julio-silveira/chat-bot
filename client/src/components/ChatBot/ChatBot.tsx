import { Collapse, Divider, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import ToggleChatBtn from './components/ToggleChatBtn';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { style } from './style';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Paper sx={style.chatBot}>
      <ToggleChatBtn toggleModal={toggleModal} />
      <Collapse
        mountOnEnter
        unmountOnExit
        in={isOpen}
      >
        <Stack
          spacing={0.5}
          sx={style.chatBotContainer}
        >
          <Divider />
          <ChatMessages />
          <Divider />
          <ChatInput />
        </Stack>
      </Collapse>
    </Paper>
    )
}
