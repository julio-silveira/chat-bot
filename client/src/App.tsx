import { Container, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import theme from '@/theme'


function App() {

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <RouterProvider  router={router}/>
      </ThemeProvider>
    </Container>

  )
}

export default App
