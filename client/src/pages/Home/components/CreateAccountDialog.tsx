import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material'
import { UserApi } from '@/services/http';

type FormType = {
  username: string;
  password: string;
  confirmPassword: string;
}

const defaultValues = {
  username: '',
  password: '',
  confirmPassword: ''
}

function CreateAccountDialog() {
  const [open, setOpen] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<FormType>({defaultValues});
  const { mutate: createUser } = UserApi.useCreateUser();
  const onClose = () => {
    if (isSubmitting) return
    setOpen(false);
  }

  const onOpen = () => {
    setOpen(true);
  }


  const onSubmit = (data:FormType)  => {
    createUser({username: data.username, password: data.password})
    onClose();
  };

  return (
    <>
    <Button onClick={onOpen}>Create now</Button>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Account</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <TextField
            label="Username"
            size='small'
            {...register('username', { required: 'Enter the username' })}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            size='small'
            {...register('password', { required: 'Enter the password' })}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            size='small'
            {...register('confirmPassword', {
              required: 'Confirm your password',
              validate: (value) => value === watch('password') || 'Passwords do not match'
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" color="primary" disabled={isSubmitting}>
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  </>
  );
}

export default CreateAccountDialog;
