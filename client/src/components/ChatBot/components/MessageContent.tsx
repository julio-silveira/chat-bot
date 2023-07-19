import { Avatar, Stack, Typography } from '@mui/material';
import { LocalMessage } from '@/services/http';
import { style } from '../style';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import { parseSecret, toHour } from '@/utils/formatters';


type Props =  {
  message: LocalMessage;
}

export default function MessageContent({message}: Props ) {

  const received  = message.type === 'response';
  return(
    <Stack
      spacing={1}
      direction={received ? 'row' : 'row-reverse'}

      p={0.5}
      sx={style.singleMessageMainContainer}
    >
      <Stack
        direction={received ? 'row' : 'row-reverse'}
        spacing={1}
        sx={style.singleMessageSecondaryContainer}
      >
        <Avatar sx={{bgcolor: 'primary.main'}} >{received ?  <SmartToyIcon /> : <PersonIcon /> }</Avatar>
        {
          message.isMulti ? (
            <Stack>
              {
                JSON.parse(message.content).map((content: string, index: number) => (
                  <Typography key={index} sx={{ wordBreak: "break-word"}}>{content} </Typography>))
              }
            </Stack>
          ) : (
            <Typography sx={{ wordBreak: "break-word"}}>{parseSecret(message.content, !!message.isSecret)} </Typography>
          )
        }

      </Stack>

      <Typography alignSelf="flex-end" sx={{fontSize: 10}} variant='subtitle2'>
        {toHour(message.time)}
        </Typography>
    </Stack>
  )
}
