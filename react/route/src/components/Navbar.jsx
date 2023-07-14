import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <ul>
            <li> <Link to="/">Home</Link>   </li>
            <li> <Link to="/about-us">About</Link>   </li>
            <li> <Link to="/reach-us">Contact</Link>   </li>
        </ul>
    </>
}

export default Navbar