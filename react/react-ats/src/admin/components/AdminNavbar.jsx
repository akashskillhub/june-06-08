import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/adminSlice'

const AdminNavbar = () => {
    const callAction = useDispatch()
    const { auth } = useSelector(state => state.admin)
    return <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Admin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                </div>
                <div class="dropdown ms-auto ">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        {auth && auth.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <button
                                onClick={e => callAction(logout())}
                                class="dropdown-item text-danger" >
                                <i className="bi bi-trash"></i> Logout
                            </button></li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar