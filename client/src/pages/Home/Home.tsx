import Button from '@mui/material/Button'
import MainContainer from '@/components/MainContainer/MainContainer'
import { Stack, Typography } from '@mui/material'


export default function Home () {
    return (
        <MainContainer>
            <Typography pt={2} color="primary" variant='h5'>Welcome to our bank</Typography>
            <Stack direction="row" alignItems="center">
              <Typography color="secondary" >Don't have account? </Typography>
              <Button>Create now</Button>
            </Stack>
        </MainContainer>
    )
}
