import { Avatar, Stack, Typography } from '@mui/material';
import { Message } from '../ChatBot';

type Props =  {
  message: Message;
}

export default function MessageContent({message}: Props ) {

  const received  = message.sender === 'bot';
  return(
    <Stack
      spacing={1}
      alignItems='center'
      direction={received ? 'row' : 'row-reverse'}
      justifyContent='space-between'
      p={0.5}
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
      }}
    >
      <Stack
        direction={received ? 'row' : 'row-reverse'}
        spacing={1}
        alignItems="center"
        sx={{
          width: '95%',
        }}
      >
        <Avatar sx={{bgcolor: 'primary.main'}} >{message.sender[0].toUpperCase()}</Avatar>
        <Typography sx={{ wordBreak: "break-word"}}>{message.message} </Typography>
      </Stack>
      <Typography alignSelf="flex-end" sx={{fontSize: 10}} variant='subtitle2'>
        {message.date.toLocaleTimeString(
            navigator.language,
            { hour: '2-digit', minute: '2-digit', second: '2-digit'}
          )
        }
        </Typography>
    </Stack>
  )
}
