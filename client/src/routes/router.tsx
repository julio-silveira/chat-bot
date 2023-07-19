import NavBar from '@/components/NavBar/NavBar'
import { ChatHistory, Home, Loan, NotFound } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element:
    <NavBar>
      <Home />
    </NavBar>
  },
  {
    path: '/chat-history',
    element:
    <NavBar>
      <ChatHistory/>
    </NavBar>
  },
  {
    path: '/loan',
    element:
    <NavBar>
      <Loan/>
    </NavBar>
  },
  {
    path: '*',
    element:
    <NavBar>
      <NotFound />
    </NavBar>
  }
])

export default router
