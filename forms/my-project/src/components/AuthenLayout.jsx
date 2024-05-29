import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthenLayout({children, authen = true}){

  const authenStatus = useSelector((state) => state.authen.status)
  const navigate = useNavigate()

  useEffect(() => {
    if(authen && authenStatus !== authen){
      navigate("/login")
  } else if(!authen && authenStatus !== authen){
      navigate("/")
  }
  }, [authenStatus, navigate, authen])
  

  return (
    <div>{children}</div>
  )
}

export default AuthenLayout