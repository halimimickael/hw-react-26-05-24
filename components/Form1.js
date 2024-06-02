import React from 'react'
import { useForm } from "react-hook-form"

export default function Form1() {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSub = (data) => {
    delete data.phone2;
    console.log(data);
  }

  return (
    <div className='container'>
      <h1>Sign up form:</h1>
      <form onSubmit={handleSubmit(onSub)} className='col-md-6'>
        <label>Name:</label>
        <input {...register("name", {
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters long'
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Only English letters and spaces are allowed'
          }
        })} type='text' className='form-control' />
        {errors.name && <div className='text-danger'>* {errors.name.message}</div>}
        
        <label>Phone:</label>
        <input {...register("phone", {
          required: 'Phone is required',
          minLength: {
            value: 10,
            message: 'Phone must be exactly 10 digits'
          },
          maxLength: {
            value: 10,
            message: 'Phone must be exactly 10 digits'
          }
        })} type='number' className='form-control' />
        {errors.phone && <div className='text-danger'>* {errors.phone.message}</div>}
        
        <label>Email:</label>
        <input {...register("email", {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Enter a valid email'
          }
        })} type='text' className='form-control' />
        {errors.email && <div className='text-danger'>* {errors.email.message}</div>}
        
        <label>Enter Email again:</label>
        <input {...register("email2", {
          required: 'Please confirm your email',
          validate: (val) => val === getValues("email") || 'Emails do not match'
        })} type='text' className='form-control' />
        {errors.email2 && <div className='text-danger'>* {errors.email2.message}</div>}

        <button className='btn btn-success mt-3'>Sign up</button>
      </form>
    </div>
  )
}
