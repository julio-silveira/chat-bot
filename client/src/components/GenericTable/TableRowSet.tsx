import { ReactNode } from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { GenericObject } from '@/types/types'

type Props = {
  dataList: GenericObject[]
  emptyRows: number
  page: number
  rowsPerPage: number
  manage?: (dataList: GenericObject) => ReactNode
}

export default function TableRowSet({
  dataList,
  emptyRows,
  page,
  rowsPerPage,
  manage
}: Props) {
  return (
    <TableBody>
      {dataList
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((e, i) => (
          <TableRow key={i}>
            {Object.entries(e).map(([key, value], index) =>
              key === 'id' ? null : (
                <TableCell key={`${value} ${index}`}>{value}</TableCell>
              )
            )}
            {manage ? (
              <TableCell align="right" key={`manager${i}`}>
                {manage(e)}
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 33 * emptyRows
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )
}
