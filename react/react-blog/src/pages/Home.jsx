import React from 'react'

const Home = ({ blogs }) => {
    const BLOG_CARD = <>
        {
            blogs.map(item => <div className="col-sm-4" key={item.title}>
                <div class="card">
                    <img src={item.hero} className='img-fluid' alt="" />
                    <div class="card-body">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>)
        }
    </>
    return <>
        <div className="container">
            <div className="row">
                {BLOG_CARD}
            </div>
        </div>

    </>


}

export default Home