import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Logo from '../Logo'
import LogoutButton from './LogoutButton'


const Header = () => {
const registerStatus = useSelector((state) => state.authen.status)
const navigate = useNavigate()

const navItems = [{
  name: 'Home',
  slug: '/',
  active: true
},
{
  name: 'Explore',
  slug: '/Explore',
  active: registerStatus
},
{
  name: 'Create',
  slug: '/create',
  active: registerStatus
},{
  name: 'Login',
  slug: '/login',
  active: !registerStatus
}, {
  name: 'Signup',
  slug: '/signup',
  active: !registerStatus
}
]

  return (
    <div className='py-3 shadow bg-gray-500'>
      <nav  className='flex'>
        <div>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul  className='flex'>
          {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button  onClick={() => navigate(item.slug)}>
                {item.name}
                </button>
              </li>
            ): null
            
              

          )} {
            registerStatus ? (
              <li>
                <LogoutButton></LogoutButton>
              </li>
            ): null
            }
        </ul>
      </nav>
    </div>
  )
}

export default Header