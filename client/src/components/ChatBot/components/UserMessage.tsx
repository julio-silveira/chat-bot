import { Avatar, Stack, Typography } from '@mui/material';

type Props =  {
  message: string;
}

export default function UserMessage({message}: Props ) {
  return(
    <Stack spacing={1} alignItems='center' direction="row-reverse" sx={{ width: '100%'}}>
      <Avatar>U</Avatar>
      <Typography>{message} </Typography>
    </Stack>
  )
}
