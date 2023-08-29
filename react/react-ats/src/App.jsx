import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Details, Login, PageNotFound, Register } from './share'
import { AddApplication, AdminNavbar, AdminProtected, Home } from './admin'
import { Account, EmployerNavbar } from './employer'
import { Profile, UserNavbar, UserProtected } from './user'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Landing from './share/Landing'
const App = () => {
  return <div className='bg-slate-200'>
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details/:jobId' element={<Details />} />
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
        <Route
          path='user'
          element={<UserProtected compo={<><UserNavbar /><Outlet /></>} />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App