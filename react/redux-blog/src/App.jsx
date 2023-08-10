import React from 'react'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return <>

    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App