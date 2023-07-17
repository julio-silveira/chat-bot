import { Avatar, Stack, Typography } from '@mui/material';

type Props =  {
  message: string;
}

export default function UserMessage({message}: Props ) {
  return(
    <Stack spacing={1} alignItems='center' direction="row" justifyContent='flex-end' sx={{ width: '100%'}}>
      <Typography>{message} </Typography>
      <Avatar>U</Avatar>
    </Stack>
  )
}
