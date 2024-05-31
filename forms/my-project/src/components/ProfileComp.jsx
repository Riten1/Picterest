import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProfileComp = () => {

  const userData = useSelector((state) => state.authen.userData)
  useEffect(() =>{
   console.log(userData) 
  })
  return (
    <div>
      <div>
      <label>User Id:
        
        </label>
        <div>{userData.$id}</div>
      </div>
     


      <div>
      <label>User name:
        
        </label>
        <div>{userData.name}</div>
      </div>


    <div>
      <label>Email:
        
        </label>
        <div>{userData.email}</div>
      </div>


    
    </div>
  )
}

export default ProfileComp