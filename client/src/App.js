import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Post from './pages/Post'
import Home from './pages/Home'

function App() {
  const user = false

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
