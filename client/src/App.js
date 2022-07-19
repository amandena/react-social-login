import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Post from './pages/Post'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      fetch("http://localhost:5001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then(res => {
        if (res.status === 200) return res.json()
        throw new Error("Authentication failed!")
      }).then(resObj => {
        setUser(resObj.user)
      }).catch(err => console.log(err))
    })()
  }, [])

  console.log(user)

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
