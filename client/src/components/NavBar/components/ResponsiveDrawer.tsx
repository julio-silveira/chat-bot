import { Divider, Drawer, List, useTheme } from '@mui/material'

import PageLinks from './PageLinks'
import { DrawerHeader, drawerWidth } from '../styles'
import { pageList } from '@/routes/pagesList'

type Props = {
  open: boolean
  handleClose: () => void
  variant: 'permanent' | 'persistent' | 'temporary' | undefined
}

export default function ResponsiveDrawer({
  open,
  handleClose,
  variant
}: Props) {
  const { palette } = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor:
            palette.mode === 'dark' ? palette.background.paper : 'primary.main'
        }
      }}
      variant={variant}
      anchor="left"
      open={open}
      onClose={handleClose}
    >
      <DrawerHeader />

      <Divider />
      <List>
        {pageList.map(
          ({ title, to, icon }, pageId) => (
            <PageLinks
              key={pageId}
              title={title}
              icon={icon}
              to={to}
            />
          )
        )}
      </List>
    </Drawer>
  )
}
