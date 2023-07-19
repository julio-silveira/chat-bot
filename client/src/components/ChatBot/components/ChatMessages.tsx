import { Box, Stack, Typography } from '@mui/material';
import MessageContent from './MessageContent';
import { useContext, useEffect, useRef } from 'react';
import { ChatBotContext } from '@/contexts';
import { style } from '../style';


export default function ChatMessages() {
  const {chatMessages} = useContext(ChatBotContext)
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(scrollTargetRef?.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    if(scrollTargetRef?.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);


  console.log(chatMessages.length);

  return (
    <Stack sx={style.messagesContainer} spacing={2}>

      {
        chatMessages.length === 0
        ? (<Typography textAlign="center" variant='h5' pt={15}>Say "Hello" to start a conversation</Typography>)
        : (
          <>
            {chatMessages.map((message, index) => (
              <MessageContent key={index} message={message} />
            ))}
          </>
        )
      }

    <Box ref={scrollTargetRef} />
    </Stack>
  )
}
