import api from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import { Conversations } from './types';

const getConversations = async (userId: number): Promise<Conversations[]> => {
    const { data } = await api.get(`/api/v1/conversation/${userId}`);
    return data;
}

const useGetConversations = () => {
    return useMutation({
        mutationKey: ['conversations'],
        mutationFn: getConversations
    })
}

export default { useGetConversations }
