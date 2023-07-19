import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material'

type Props = {
  columns: string[]
}

export default function LoadingRows({ columns }: Props) {
  return (
    <TableBody>
      {columns.map((col) => (
        <TableRow key={col}>
          <TableCell colSpan={columns.length}>
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
