import React, { useContext } from 'react'
import { BlogContext } from '../App'
import { Link } from 'react-router-dom'

const Home = () => {
    const { blogs } = useContext(BlogContext)
    return <div className='container'>
        <div className="row">
            {blogs.filter(item => item.publish === true).map((item, i) => <div className="col-sm-4" key={item.title}>
                <div class="card">
                    <img src={item.hero} className='img-fuild' alt="" />
                    <div class="card-body">
                        <strong>{item.title}</strong>
                        <Link to={`/details/${i}`}>Read More</Link>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}

export default Home