import MainContainer from '@/components/MainContainer/MainContainer'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { ChatBotContext } from '@/contexts'
import CreateAccountDialog from './components/CreateAccountDialog'


export default function Home () {
  const { userId } = useContext(ChatBotContext)
    return (
        <MainContainer>
            <Typography pt={2} color="primary" variant='h5'>Welcome to our bank</Typography>
            {
              !userId ? (
                <Stack direction="row" alignItems="center">
                  <Typography color="secondary" >Don't have account? </Typography>
                  <CreateAccountDialog />
                </Stack>
              ): null
            }
        </MainContainer>
    )
}
