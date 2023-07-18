import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about-us">About</Link>
                        <Link className='nav-link' to="/reach-us">Contact</Link>
                        <Link className='nav-link' to="/service/fake-service">service</Link>
                        <Link className='nav-link' to="/admin">Dash</Link>
                        <Link className='nav-link' to="/admin/settings">settings</Link>
                    </div>
                </div>
            </div>
        </nav>


    </>
}

export default Navbar