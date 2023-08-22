import React from 'react'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Navbar from './comonents/navbar'
import Dashboard from './pages/Dashboard'
import Protected from './share/Protected'
import Account from './pages/Account'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dash' element={<Protected compo={<Dashboard />} />} />
        <Route path='/account' element={<Protected compo={<Account />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
