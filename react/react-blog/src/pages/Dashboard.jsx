import React from 'react'

const Dashboard = ({ blogs, addBlog, deleteBlog }) => {
    // console.log(arg)
    const obj = {}
    const handleChange = e => {
        obj[e.target.name] = e.target.value
    }
    const handleAddBlog = e => {
        // arg.addBlog(obj)
        addBlog(obj)
    }

    const BLOG_TABLE = <>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Hero</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs.map((item, i) => <tr>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img src={item.hero} height={100} alt="" />
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-warning">edit</button>
                            <button
                                onClick={e => deleteBlog(item)}
                                type="button"
                                class="btn btn-danger">delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
    return <>
        <pre>{JSON.stringify(blogs, null, 2)}</pre>
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
            {BLOG_TABLE}
        </div >
    </>
}

export default Dashboard