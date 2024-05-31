import React from 'react'
import icon from '../../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileIcon = () => {

  const navigate = useNavigate()

  const userData = useSelector((state) => state.authen.userData)
  return (
    <Link to={`/profile/${userData.$id}`}>
    <img className='w-10' src={icon}></img>
    </Link>
    
  )
}

export default ProfileIcon