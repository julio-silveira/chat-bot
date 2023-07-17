import { Container, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';

import router from '@/routes'
import theme from '@/theme'
import { queryClient } from '@/services'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
          <ToastContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </Container>

  )
}

export default App
