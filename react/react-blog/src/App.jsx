import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Navbar from './components/Navbar'
const App = () => {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/more" element={<Details />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App