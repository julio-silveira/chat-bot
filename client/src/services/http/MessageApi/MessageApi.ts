import api from '@/services/api';
import { MessageRequest, MessageResponse } from '.';
import { useMutation } from '@tanstack/react-query';

const createMessage = async (message: MessageRequest): Promise<MessageResponse> => {
    console.log(message);

    const { data } = await api.post('/api/v1/message', message);
    return data;
}

const useCreateMessage = () => {
  return useMutation({
    mutationFn: createMessage,
    mutationKey: ['createMessage']
  })
}

export default { useCreateMessage };
