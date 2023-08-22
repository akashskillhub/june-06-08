import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Login, PageNotFound, Register } from './share'
import { AddApplication, AdminNavbar, AdminProtected, Home } from './admin'
import { Account, EmployerNavbar } from './employer'
import { Profile, UserNavbar } from './user'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <ul>
        <li> <Link to="/">login</Link> </li>
        <li> <Link to="/register">register</Link> </li>
        <li> <Link to="/admin">admin</Link> </li>
        <li> <Link to="/admin/apply">application</Link> </li>
        <li> <Link to="/user">user</Link> </li>
        <li> <Link to="/employer">Employee</Link> </li>
      </ul>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/admin'
          element={
            <AdminProtected
              compo={<><AdminNavbar /><Outlet /></>} />
          }
        >
          <Route index element={<Home />} />
          <Route path='apply' element={<AddApplication />} />
        </Route>
        <Route path='employer' element={<> <EmployerNavbar /> <Outlet />  </>}>
          <Route index element={<Account />} />
        </Route>
        <Route path='user' element={<> <UserNavbar /> <Outlet />  </>}>
          <Route index element={<Profile />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App