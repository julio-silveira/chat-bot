import { Avatar, Stack, Typography } from '@mui/material';
import { LocalMessage } from '@/services/http';

type Props =  {
  message: LocalMessage;
}

export default function MessageContent({message}: Props ) {

  const received  = message.type === 'response';
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
        <Avatar sx={{bgcolor: 'primary.main'}} >{received ?  'B' : 'U' }</Avatar>
        <Typography sx={{ wordBreak: "break-word"}}>{message.content} </Typography>
      </Stack>
      <Typography alignSelf="flex-end" sx={{fontSize: 10}} variant='subtitle2'>
        {message.time.toLocaleTimeString(
            navigator.language,
            { hour: '2-digit', minute: '2-digit', second: '2-digit'}
          )
        }
        </Typography>
    </Stack>
  )
}
