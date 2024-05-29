import React from 'react'
import { useDispatch } from 'react-redux'
import authentications from '../../appwrite/authen'
import { logout } from '../../store/athenSlice'

const LogoutButton = () => {
  const dispatch = useDispatch()

  function handleLogout() {
    authentications.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton