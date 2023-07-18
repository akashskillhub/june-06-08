import React from 'react'

const Dashboard = () => {
    const obj = {}
    const handleChange = e => {
        obj[e.target.name] = e.target.value
    }
    const handleAddBlog = e => {
        console.log(obj)
    }
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Add Blog</div>
                        <div class="card-body">
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                className='form-control'
                                placeholder='enter title' />
                            <br />
                            <input
                                type="text"
                                name="hero"
                                onChange={handleChange}
                                className='form-control'
                                placeholder='enter hero image URL' />
                            <br />
                            <textarea
                                name="desc"
                                className='form-control'
                                onChange={handleChange}
                                placeholder='Enter Description'></textarea>
                            <br />
                            <button
                                onClick={handleAddBlog}
                                type="button"
                                class="btn btn-primary">Add Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Dashboard