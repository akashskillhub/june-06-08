import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const About = () => {
    const allServices = ["ui-devlopment", "animations", "frontend"]
    return <>
        {
            allServices.map(item => <h1 key={item}>
                {item} <Link to={`/service/${item}`}>Know More</Link>
            </h1>)
        }
    </>
}

export default About