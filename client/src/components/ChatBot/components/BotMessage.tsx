import { Avatar, Stack, Typography } from '@mui/material';

type Props =  {
  message: string;
}

export default function BotMessage({message}: Props ) {
  return(
    <Stack spacing={1} alignItems='center' direction="row" justifyContent='flex-start'>
      <Avatar>B</Avatar>
      <Typography>{message} </Typography>
    </Stack>
  )
}
