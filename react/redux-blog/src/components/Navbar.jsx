import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link to="/account" class="navbar-brand" >SKILLHUB</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active" >Home</Link>
                    <Link to="/login" class="nav-link" >Login</Link>
                    <Link to="/account" class="nav-link" >Dashboard</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar