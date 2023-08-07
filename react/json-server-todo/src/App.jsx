import React from 'react'
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Effect from './pages/MyuseEffect'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/todo">todo</Link></li>
        <li><Link to="/test">effect</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/test" element={<Effect />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App