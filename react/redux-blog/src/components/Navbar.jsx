import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/store'

const Navbar = () => {
    const { auth } = useSelector(state => state.clients)
    const callAction = useDispatch()
    return <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <Link to="/account" class="navbar-brand" >SKILLHUB</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {
                        auth
                            ? <>
                                <Link to="/account" class="nav-link" >Dashboard</Link>
                                <Link to="/add-blog" class="nav-link" >Blogs</Link>
                            </>
                            : <>
                                <Link to="/" class="nav-link active" >Home</Link>
                                <Link to="/login" class="nav-link" >Login</Link>
                            </>
                    }

                </div>
            </div>
            {
                auth && <>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            {auth.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button
                                onClick={e => callAction(logoutUser())}
                                class="dropdown-item" >Logout</button></li>

                        </ul>
                    </div>
                </>
            }

        </div>
    </nav>
}

export default Navbar