import React from 'react'
import { MdSpaceDashboard, MdShoppingBag, MdBarChart, MdPeople, MdSettingsApplications } from "react-icons/md"
import Navbar from './Navbar'
import { adminRoutes } from '../adminRoutes'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const links = [
        { icon: <MdSpaceDashboard />, text: "Dashboard", to: "" },
        { icon: <MdShoppingBag />, text: "Products", to: "" },
        { icon: <MdBarChart />, text: "Orders", to: "" },
        { icon: <MdPeople />, text: "Users", to: "" },
        { icon: <MdSettingsApplications />, text: "Settings", to: "" },
    ]

    return <>
        <div className='bg-slate-100 w-48 h-screen flex justify-center flex-col fixed top-0 left-0'>
            <div className=' bg-slate-300 p-8 '>
                <h1 className='text-2xl font-bold'>Dev Com </h1>
                <p className='text-sm text text-slate-500'></p>
            </div>
            <div className=' h-full overflow-y-auto'>
                {adminRoutes.map(item => <Link to={item.path === "index" ? "/admin" : item.path} className='p-4 hover:bg-slate-400 hovr:border-r-8  hover:border-solid hover:border-slate-500 transition-all duration-300 cursor-pointer flex gap-4  items-center text-slate-500 text-md hover:text-slate-900  
            ' key={item.label}>
                    <span>{item.icon} </span>
                    <span>{item.label} </span>
                </Link>)}
            </div>
            <div className=' bg-red-300 p-4'>footer</div>

        </div>
    </>
}

export default Sidebar