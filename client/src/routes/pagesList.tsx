import { ReactElement } from 'react'

import HouseIcon from '@mui/icons-material/House';
import HistoryIcon from '@mui/icons-material/History';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

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
    title: 'Chat history',
    to: '/chat-history',
    icon: <HistoryIcon sx={{ color: 'white' }} />,
  },
  {
    title: 'Loan',
    to: '/loan',
    icon: <CreditScoreIcon sx={{ color: 'white' }} />,
  }

]
