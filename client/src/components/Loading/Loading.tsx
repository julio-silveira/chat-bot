import { CircularProgress } from '@mui/material';
import MainContainer from '../MainContainer/MainContainer';

export default function Loading() {
  return(
    <MainContainer sx={{justifyContent: 'center'}}>
      <CircularProgress />
    </MainContainer>
  )
}
