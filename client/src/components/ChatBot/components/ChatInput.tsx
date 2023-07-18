import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { TextField, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatBotContext } from '@/contexts';


export default function ChatInput()  {
  const {sendMessageToBot} = useContext(ChatBotContext)

  const [message, setMessage] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const submitMessage = (event: FormEvent) => {
    event.preventDefault()
    if (message && message.trim() !== '') {
      sendMessageToBot(message);
      setMessage('');
    }
  };

  return (
    <Stack onSubmit={submitMessage} component='form' alignItems="center" direction="row">
      <TextField
        variant="outlined"
        size='small'
        value={message}
        onChange={handleChange}
        fullWidth
      />
      <IconButton type='submit' color="primary" onClick={submitMessage}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

