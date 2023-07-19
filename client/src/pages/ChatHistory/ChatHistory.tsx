import MainContainer from '@/components/MainContainer/MainContainer'
import { ChatBotContext } from '@/contexts'
import { Typography } from '@mui/material'
import { useContext } from 'react'


export default function Loan () {
  const {userId} = useContext(ChatBotContext)
    return (
        <MainContainer>
            <Typography pt={2} color="primary" variant='h5'>Chat History</Typography>
            {
              userId
              ? (null)
              : (<Typography pt={2} color="secondary" variant='h6'>Please login first</Typography>)
            }
        </MainContainer>
    )
}
