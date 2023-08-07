import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../App'

const Details = () => {
    const { blogs } = useContext(BlogContext)
    const { id } = useParams()
    console.log(blogs[id])
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <h1>{blogs[id].title}</h1>
                <img src={blogs[id].hero} className='img-fluid' alt="" />
                <p>{blogs[id].desc}</p>
            </div>
        </div>
    </div>
}

export default Details