import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/actions/publicActions';
import { Link } from 'react-router-dom';
const Landing = () => {
    return <div >
        <SearchBar />
        <Navbar />
        <Hero />
        <FeaturedJobs />
        <Footer />
    </div>
}
const SearchBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState()
    const menuClasses = classNames({
        "w-[95%] min-h-[95%] md:w-[95%]": showMenu
    })
    const subMenuClasses = classNames({
        "hidden ": !showMenu,
        "bg-slate-600 p-3 mb-4 rounded-lg  flex-1 w-full": showMenu
    })
    return <>
        <div
            className={` bg-slate-700 w-1/3 md:w-1/2 md:justify-start p-3 border-slate-500 border-5 rounded-lg fixed bottom-3 left-1/2 -translate-x-1/2  text-slate-100 flex  items-center justify-between flex-col transition-all duration-500 z-50  ${menuClasses}`} >

            <div className={subMenuClasses}>
                {selectedFilter === "category" && <FliterCategory />}
                {selectedFilter === "types" && <FliterTypes />}
                {selectedFilter === "country" && <FliterCountry />}
            </div>

            <div className='flex w-full gap-4'>
                <div className='flex  items-center justify-between w-full md:w-auto gap-2'>
                    Jobify {
                        showMenu
                            ? <HiOutlineXMark
                                onClick={e => setShowMenu(!showMenu)}
                                className='text-2xl cursor-pointer' />
                            : <HiBars3CenterLeft
                                onClick={e => setShowMenu(!showMenu)}
                                className='text-2xl cursor-pointer' />
                    }
                </div>
                <div className='hidden  md:flex md:justify-evenly w-full'>
                    <span>Filter </span>
                    <span onClick={e => {
                        setSelectedFilter(selectedFilter === "category" ? null : "category")
                        setShowMenu(selectedFilter === "category" ? false : true)
                    }} className='cursor-pointer'>
                        Category
                        {
                            selectedFilter === "category"
                                ? <span>up</span>
                                : <span>down</span>
                        }
                    </span>
                    <span onClick={e => {
                        setSelectedFilter(selectedFilter === "types" ? null : "types")
                        setShowMenu(selectedFilter === "types" ? false : true)
                    }} className='cursor-pointer'>Types</span>
                    <span onClick={e => {
                        setSelectedFilter(selectedFilter === "country" ? null : "country")
                        setShowMenu(selectedFilter === "country" ? false : true)
                    }} className='cursor-pointer'>Country</span>
                </div>
            </div>
        </div>
    </>
}
const FliterCategory = () => {
    return <>
        filterCategory
    </>
}
const FliterTypes = () => {
    return <>
        FliterTypes
    </>
}
const FliterCountry = () => {
    return <>
        <input type="text" className='w-full' />
        <hr />
        <div className='grid grid-cols-3 gap-5'>
            <span>pune</span>
            <span>mumbai</span>
            <span>dlehi</span>
            <span>ban</span>
            <span>hy</span>
        </div>
    </>
}
const Navbar = () => {
    return <div >
        <div className="navbar bg-slate-600 text-slate-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">ATS Pro+ </a>
            </div>
            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-700 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
const Hero = () => {
    return <div className="hero mb-[10%] mt-[5%] ">
        <div className="hero-content flex-col gap-5 flex-wrap">
            <div className='text-center'>
                <div className='md:text-5xl font-bold '>Join The Fastest Growing Job Search Site 2023</div>
                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestias? Explicabo alias incidunt tenetur facere.</p>
            </div>
            <div className="stats hidden md:flex">

                <div className="stat place-items-center">
                    <div className="stat-title">Jobs</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↗ 90 (14%)</div>
                </div>

            </div>
            <button className="btn btn-outline ">Register Now</button>
        </div>
    </div>
}

const JobPost = ({ item }) => {
    return <Link to={`/details/${item.id}`}>
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.title}
                    <div className="badge badge-secondary">{item.type}</div>
                </h2>
                <p>{item.desc}</p>
                <div className="card-actions justify-end">
                    {item.skills.map(s => <div key={s}
                        className="badge badge-outline">{s}</div>
                    )}
                </div>
            </div>
        </div>
    </Link>
}

export const FeaturedJobs = () => {
    const dispatch = useDispatch()
    const { jobs } = useSelector(state => state.public)
    useEffect(() => {
        dispatch(getJobs())
    }, [])
    return <div className='container my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            jobs && jobs.map(item => <JobPost item={item} />)
        }
    </div>
}
const Footer = () => {

    return <>
        <footer className="footer p-10 bg-base-200 text-base-content mt-16 ">
            <div>
                <span className="footer-title">Quick Links</span>
                <Link to="/">Landing</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
                <Link to="/admin">admin</Link>
                <Link to="/admin/apply">application</Link>
                <Link to="/user">user</Link>
                <Link to="/employer">Employee</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
        <footer className="mb-24 md:mb-0 footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
            <div className="items-center grid-flow-col">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>SKILLHUB. <br />Find Your Dream Job</p>
            </div>
            <div className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </footer>
    </>
}
export default Landing