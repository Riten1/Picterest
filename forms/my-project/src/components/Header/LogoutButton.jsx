import React from 'react'
import { useDispatch } from 'react-redux'
import authentications from '../../appwrite/authen'
import { logout } from '../../store/athenSlice'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    authentications.logout().then(() => {
      dispatch(logout())
      navigate('/login')
    })
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton