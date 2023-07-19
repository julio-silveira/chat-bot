import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material'

type Props = {
  to: string
  title: string
  icon?: ReactElement
}

function CustomNavLink({ to, title, icon }: Props) {
  const { palette } = useTheme()

  const color = palette.mode === 'dark' ? 'inherit' : 'white'
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primaryTypographyProps={{ color }} primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default CustomNavLink
