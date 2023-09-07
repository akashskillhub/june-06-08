import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <Sidebar />
        {/* <Navbar /> */}
        <div className='ml-48'>
            <Outlet />
        </div>
    </>
}

export default Layout