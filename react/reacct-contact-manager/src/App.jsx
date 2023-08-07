import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Dashboard />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App