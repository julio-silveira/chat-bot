import { GenericTable, Loading } from '@/components'
import MainContainer from '@/components/MainContainer/MainContainer'
import { ChatBotContext } from '@/contexts'
import { ConversationApi } from '@/services/http'
import { toCsv } from '@/utils/csvParser'
import { Button, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { CSVLink } from 'react-csv'


export default function Loan () {
  const {userId} = useContext(ChatBotContext)
  const {mutate,data, isLoading} = ConversationApi.useGetConversations()

  useEffect(() => {
    if (userId) {
      mutate(userId)
    }
  }, [userId])


  if (isLoading) return <Loading />

    return (
        <MainContainer>
            <Typography py={2} color="primary" variant='h5'>Chat History</Typography>
            {
              userId
              ? (
              <>
              <CSVLink data={toCsv(data)}>
                <Button variant='contained'>
                    Download All Chats
                </Button>
              </CSVLink>

              <GenericTable
                loading={isLoading}
                dataList={data?.map(({user, ending_date}) => (
                  {
                    Username: user.username,
                    Date: new Date(ending_date).toLocaleString()
                  }) )  || []} />
              </>
                )
              : (<Typography pt={2} color="secondary" variant='h6'>Please login first</Typography>)
            }
        </MainContainer>
    )
}
