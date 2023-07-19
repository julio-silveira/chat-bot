import api from '@/services/api';
import { CreateUser } from './types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const createUser = async (user: CreateUser) => {
    const { data } = await api.post('/api/v1/user/create', user);
    return data;
}

const useCreateUser = () => {
  return useMutation({
    mutationKey:['createUser'],
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success(data.message)
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.detail )
    }
  })
}

export default { useCreateUser }
