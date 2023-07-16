import { Container, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import router from '@/routes'
import theme from '@/theme'

import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <RouterProvider  router={router}/>
        <ToastContainer />
      </ThemeProvider>
    </Container>

  )
}

export default App
