import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('username', { required: true })} placeholder="Username" />
      {errors.username && <span>This field is required</span>}
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && <span>This field is required</span>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
