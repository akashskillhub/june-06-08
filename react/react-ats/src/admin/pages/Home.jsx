import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmployers, getAllUsers } from '../../redux/actions/adminAction'

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState("users")
    return <>
        <SideBar setSelectedMenu={setSelectedMenu} />
        {selectedMenu === "users" && <Users />}
        {selectedMenu === "employers" && <Employers />}
    </>
}

const Users = () => {
    const { users } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return <>
        users
    </>
}
const Employers = () => {
    const { employers } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEmployers())
    }, [])
    return <>
        employers
    </>
}

const SideBar = ({ setSelectedMenu }) => {

    return <>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a onClick={e => setSelectedMenu("users")}>Users</a></li>
                    <li><a onClick={e => setSelectedMenu("employers")}>Employers</a></li>
                </ul>

            </div>
        </div>
    </>
}

export default Home