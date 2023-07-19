import { ReactNode, useState } from 'react'

import {
  Paper,
  Table,
  TableContainer,
  TablePagination,
  Typography
} from '@mui/material'
import TableHeader from './TableHeader'
import LoadingRows from './LoadingRows'
import TableRowSet from './TableRowSet'
import { Box } from '@mui/system'
import { GenericObject } from '@/types/types'
import { Loading } from '../Loading'

type Props = {
  loading: boolean
  dataList: GenericObject[]
  manage?: (dataList: GenericObject) => ReactNode
  columnList?: string[]
}

function GenericTable({ loading, dataList, manage, columnList }: Props) {
  const [page, setPage] = useState(0)
  const [rowsPerPage] = useState(10)
  const count = dataList.length

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  if (loading) return <Loading />

  if (count < 1 && !loading)
    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography pt={2} px={4} variant="body1">
          You don't have any finished chat.
        </Typography>
      </Box>
    )

  const columns = columnList || Object.keys(dataList[0])
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - count) : 0

  return (
    <TableContainer component={Paper} elevation={5} sx={{ p: 1, mb: 4 }}>
      <Table size="small" stickyHeader sx={{ minWidth: 300 }}>
        <TableHeader columns={columns} manage={Boolean(manage)} />

        {loading ? (
          <LoadingRows columns={columns} />
        ) : (
          <TableRowSet
            page={page}
            rowsPerPage={rowsPerPage}
            dataList={dataList}
            emptyRows={emptyRows}
            manage={manage}
          />
        )}
      </Table>
      <TablePagination
        component="div"
        count={count}
        onPageChange={handlePageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </TableContainer>
  )
}

export default GenericTable
