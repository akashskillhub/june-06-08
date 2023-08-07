import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Navbar from './components/Navbar'
export const BlogContext = createContext()

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Context is good",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum omnis ex aliquid exercitationem inventore ipsa hic nam! Obcaecati, saepe! Sit at ipsum pariatur dolorem vero, quisquam amet dolor cupiditate.",
      hero: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      ,
      publish: true
    },
    {
      title: "Redux is good",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum omnis ex aliquid exercitationem inventore ipsa hic nam! Obcaecati, saepe! Sit at ipsum pariatur dolorem vero, quisquam amet dolor cupiditate.",
      hero: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      ,
      publish: false
    },
  ])
  const addBlog = val => setBlogs([...blogs, { ...val, publish: false }])
  const handlePublish = index => {
    const copy = [...blogs]
    copy[index].publish = !copy[index].publish
    setBlogs(copy)
  }

  const handleDelete = title => {
    setBlogs(blogs.filter(item => item.title != title))
  }
  const handleEdit = (value) => {
    const copy = [...blogs]
    copy[value.index] = value
    setBlogs(copy)
  }
  return <>
    <BrowserRouter>
      <Navbar />
      <BlogContext.Provider value={{ blogs, addBlog, handlePublish, handleDelete, handleEdit }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/account' element={<Dashboard />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BlogContext.Provider>
    </BrowserRouter>
  </>

}

export default App