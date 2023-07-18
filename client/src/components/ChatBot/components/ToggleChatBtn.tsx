import { Stack, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

type Props = {
  toggleModal: () => void;
}

export default function ToggleChatBtn({toggleModal}: Props) {
  return(
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      borderRadius="12px 12px 0 0 "
      sx={{
        border: '2px solid #E0E0E0',
        borderBottom: 'none',
        width: '95%',
        bgcolor: 'primary.main',
        p: 1,
        '&:hover': {
          cursor: 'pointer'
        }
      }}
      onClick={toggleModal}
    >
      <ChatIcon sx={{color: 'white'}} />
      <Typography sx={{fontWeight: 'bold', color: 'white'}} variant='h6'>CHAT</Typography>
    </Stack>
  )
}
