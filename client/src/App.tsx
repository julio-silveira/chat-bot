import { Container } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'


function App() {

  return (
    <Container>
      <RouterProvider  router={router}/>
    </Container>

  )
}

export default App
