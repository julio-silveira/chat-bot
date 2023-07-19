import NavBar from '@/components/NavBar/NavBar'
import { Home, NotFound } from '@/pages'
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
    path: '*',
    element: <NotFound />
  }
])

export default router
