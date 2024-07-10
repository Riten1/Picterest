import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthenLayout from './components/AuthenLayout.jsx'
import Login from './pages/Login.jsx'
import Explore from './pages/Explore.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Create from './pages/Create.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Post from './pages/AddedPost.jsx'
import EditPost from './pages/EditPost.jsx'
import ConfirmPost from './pages/ConfirmPost.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, 
      {
        path: '/Create',
        element: (<AuthenLayout authen={true} >
          <Create />
        </AuthenLayout>)
      },
      {
        path: '/Explore',
        element: <Explore />
      },
      {
        path: '/login',
        element: (
          <AuthenLayout authen={false}>
            <Login />
          </AuthenLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthenLayout authen={false}>
            <Signup />
          </AuthenLayout>
        )
      },
      {
        path: '/post/:postId',
        element: <Post />
      },
      {
        path: '/edit-post/:postId',
        element:(<AuthenLayout authen={true}>
          <EditPost />
          </AuthenLayout>
        ) 
      },
      {
        path: '/confirm-post/:postId',
        element: (
          <AuthenLayout authen={true}>
            <ConfirmPost />
          </AuthenLayout>
        )
      },
      {
        path: '/profile/:userId',
        element: (
          <AuthenLayout authen={true}>
            <Profile />
          </AuthenLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
    </Provider>
  
    
  </React.StrictMode>,
)
