import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Service from './pages/Service'
import Dashboard from './pages/admin/Dashboard'
import Settings from './pages/admin/Settings'


const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/reach-us' element={<Contact />} />
        <Route path='/service/:id' element={<Service />} />



        {/* <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/settings' element={<Settings />} /> */}


        <Route path='/admin'>
          <Route index element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App