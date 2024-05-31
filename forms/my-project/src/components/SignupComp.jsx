import React from 'react'
import Input from './Input'
import Button from './Button'
import Logo from './Logo'
import authentications from '../appwrite/authen'
import {useNavigate, Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/athenSlice'

const SignupComp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()

  async function submitSignup(data) {
    try {
      const getCreateNew = await authentications.createAccount(data)
      if (getCreateNew){
        const userData = authentications.getCurrentAccount()
        if (userData) dispatch(login(userData))
          navigate('/')
        
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <Link to='/'>
      <Logo />
      </Link>
      <div>
        <h2>Create an Account</h2>
      </div>
      <form onSubmit={handleSubmit(submitSignup)}>
        <Input 
        label = 'Name:'
        type = 'text'
        placeholder ='Enter your full name'
        {...register('name', {required: true}
        )}
        />
        <Input 
        label = 'Email:'
        type = 'email'
        placeholder ='Enter your email'
        {...register('email', {required: true})
        }
        />
        
        <Input 
        label = 'Password: '
        type = 'password'
        placeholder ='Enter password'
        {...register('password', {required: true})
        }
        />
        <Button 
        type='submit'
        name='Create'
        />
      </form>
      <p>
        Already have an account?
        <Link to='/login' >
        Login
        </Link>
      </p>
    </div>
  )
}

export default SignupComp