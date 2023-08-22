import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/actions/userActions'
import { toast } from 'react-toastify'

const Navbar = () => {
    const { auth } = useSelector(state => state.clients)
    const callAction = useDispatch()
    return <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <Link to="/" className="navbar-brand">SKILLHUB</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className='nav-link' to="/">Register</Link>
                    <Link className='nav-link' to="/login">login</Link>
                    <Link className='nav-link' to="/account">Account</Link>
                </div>
                {auth
                    ? <>
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                {auth.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button
                                    onClick={e => {
                                        callAction(logoutUser())
                                        toast.success("Logout Success")
                                    }}
                                    class="dropdown-item">Logout</button></li>
                            </ul>
                        </div></>
                    : <>

                    </>}
            </div>
        </div>
    </nav>
}

export default Navbar