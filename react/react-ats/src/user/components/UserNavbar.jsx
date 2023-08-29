import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/slices/userSlice'

const UserNavbar = () => {

    const { auth } = useSelector(state => state.user)
    const callAction = useDispatch()
    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">User </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    {auth && auth.name}
                </button>
                <ul class="dropdown-menu">
                    <li><button
                        class="dropdown-item"
                        onClick={e => callAction(userLogout())} >
                        Logout
                    </button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default UserNavbar