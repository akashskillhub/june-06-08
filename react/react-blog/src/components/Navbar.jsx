import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Blog Pro+</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/dash">Dashboard</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar