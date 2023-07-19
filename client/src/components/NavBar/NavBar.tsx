import { ReactNode, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppBar from './components/AppBar'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import { DrawerHeader, Main } from './styles'
import bank from '@/assets/bank.png'
import { ChatBotContext } from '@/contexts'

type Props = {
  children: ReactNode
}

export default function NavBar({ children }: Props) {
  const theme = useTheme()
  const onMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { logout, userId } = useContext(ChatBotContext)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Box sx={{width: '100px'}} component="img" src={bank} alt="bank-logo" />
            </Link>
          </Stack>
          <Stack direction="row">
           {
              userId ? (
                <IconButton
                  onClick={handleLogout}
                >
                  <LogoutIcon />
                </IconButton>
              )
              : null
           }
          </Stack>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer
        open={open}
        handleClose={handleDrawerClose}
        variant={onMobile ? 'temporary' : 'persistent'}
      />

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}
