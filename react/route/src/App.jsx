import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/reach-us' element={<Contact />} />
        <Route path='*' element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App