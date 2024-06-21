
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import authen from './appwrite/authen'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/athenSlice'

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    authen.getCurrentAccount().then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    console.log(loginStatus)
  })


  return (
    <>
     <Header />
     <main>
    
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App
