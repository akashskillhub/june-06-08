import React from 'react'

const UserNavbar = () => {
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
        </div>
    </nav>
}

export default UserNavbar