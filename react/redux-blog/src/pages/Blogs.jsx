import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, deleteBlog, getBlogs, invalidate, updateBlog } from './redux/store'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const Blogs = () => {
    const callAction = useDispatch()
    const [selectedBlog, setSelectedBlog] = useState({})
    const [userResponse, setUserResponse] = useState({
        title: "Learn Redux Toolkit",
        desc: "The most popular State mang. Tool",
        hero: "https://images.unsplash.com/photo-1691073123397-d93b4e3b9991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    })

    const { blogs, blogDelete, blogUpdate, blogCreate } = useSelector(state => state.articles)


    const handleChange = e => setSelectedBlog({ ...selectedBlog, [e.target.name]: e.target.value })

    useEffect(() => {
        if (blogCreate) {
            toast.success("Blog Create Success")
        }
        if (blogUpdate) {
            toast.warning("Blog Edit Success")
        }
        if (blogDelete) {
            toast.error("Blog Delete Success")
        }
        callAction(getBlogs())
    }, [blogDelete, blogUpdate, blogCreate])
    return <>
        <ToastContainer />
        <div className="container my-5">
            <div className='text-end'>
                <button
                    className='btn btn-primary'
                    onClick={e => {
                        callAction(addBlog(userResponse))
                        callAction(invalidate())
                    }}>+Add Blog</button>
            </div>
        </div>

        <hr />

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
                    blogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img width={100} src={item.hero} className='img-fluid' alt="" />
                        </td>
                        <td>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={e => setSelectedBlog(item)}
                                className='btn btn-outline-warning mx-2'>
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button
                                className='btn btn-outline-danger'
                                onClick={e => {
                                    callAction(deleteBlog(item.id))
                                    callAction(invalidate())
                                }}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


        {/* edit modal start */}

        <div class="modal fade" id="edit">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" >Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div class="modal-body">
                        <input onChange={handleChange} name="title" value={selectedBlog.title} type="text" className='form-control' /> <br />
                        <input onChange={handleChange} name="desc" value={selectedBlog.desc} type="text" className='form-control' /> <br />
                        <input onChange={handleChange} name="hero" value={selectedBlog.hero} type="text" className='form-control' /> <br />
                        <button
                            onClick={e => {
                                callAction(updateBlog(selectedBlog))
                                callAction(invalidate())

                            }}
                            data-bs-dismiss="modal"
                            className='btn btn-warning me-3'>Update</button>
                        <button data-bs-dismiss="modal" className='btn btn-secondary'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
        {/* edit modal end*/}
    </>
}





export default Blogs