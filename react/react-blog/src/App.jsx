import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Navbar from './components/Navbar'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const addBlog = arg => {
    console.warn(arg)
    setBlogs([...blogs, arg])
  }
  const deleteBlog = arg => {
    setBlogs(blogs.filter(item => item.title != arg.title))
  }

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home blogs={blogs} />} />
      <Route path="/dash" element={<Dashboard
        addBlog={addBlog}
        blogs={blogs}
        deleteBlog={deleteBlog}
      />} />
      <Route path="/more" element={<Details />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App