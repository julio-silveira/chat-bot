import  { useMemo } from 'react'
import { TableCell, TableHead, TableRow, useTheme } from '@mui/material'

type Props = {
  columns: string[]
  manage?: boolean
}

export default function TableHeader({ columns, manage }: Props) {
  const { palette } = useTheme()

  const headerSyles = useMemo(
    () => ({
      bgcolor: 'primary.main',
      fontWeight: 700,
      color: 'white'
    }),
    [palette]
  )
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) =>
          column === 'id' ? null : (
            <TableCell sx={headerSyles} key={column}>
              {column}
            </TableCell>
          )
        )}
        {manage ? (
          <TableCell sx={headerSyles} align="right" key="manage">
            Gerenciar
          </TableCell>
        ) : null}
      </TableRow>
    </TableHead>
  )
}
