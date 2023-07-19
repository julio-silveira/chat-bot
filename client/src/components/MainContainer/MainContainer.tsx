import { ReactNode } from 'react'

import { Container } from '@mui/material'

type Props = {
  children: ReactNode
  sx?: object
}

export default function MainContainer({ children, sx }: Props) {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        pt: 1,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        ...sx
      }}
    >
      {children}
    </Container>
  )
}
