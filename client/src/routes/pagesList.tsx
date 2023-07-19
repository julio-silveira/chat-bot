import { ReactElement } from 'react'

import HouseIcon from '@mui/icons-material/House';
import HistoryIcon from '@mui/icons-material/History';

export type Page = {
  title: string
  to: string
  icon: ReactElement
}

export const pageList: Page[] = [
  {
    title: 'Home',
    to: '/',
    icon: <HouseIcon sx={{ color: 'white' }} />,
  },
  {
    title: 'Conversation History',
    to: '/history',
    icon: <HistoryIcon sx={{ color: 'white' }} />,
  }

]
