import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as yup from "yup"
import { BlogContext } from '../App'
const Dashboard = () => {
    const { blogs, addBlog, handlePublish, handleDelete, handleEdit } = useContext(BlogContext)
    const config = [
        { fieldName: "title", label: "Enter Title" },
        { fieldName: "desc", label: "Enter Desc" },
        { fieldName: "hero", label: "Enter Image URL" },
    ]
    const formik = useFormik({
        initialValues: {
            title: "Learn React",
            desc: "React is fun 🎉",
            hero: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        },
        validationSchema: yup.object({
            title: yup.string().required().min(2),
            desc: yup.string().required().min(2),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            // console.log(values)
            addBlog(values)
            resetForm()
        }
    })

    const [edit, setEdit] = useState({})
    const eformik = useFormik({
        enableReinitialize: true,
        initialValues: edit,
        validationSchema: yup.object({
            title: yup.string().required().min(2),
            desc: yup.string().required().min(2),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            // console.log(values)
            // addBlog(values)
            handleEdit(values)
            resetForm()
        }
    })

    const BLOG_TABLE = blogs.length > 0
        ? <>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hero</th>
                        <th>Title</th>
                        <th>Desc</th>
                        <th>Publish</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((item, i) => <tr key={item.title} className={`${item.publish ? "table-success" : "table-danger"}`}>
                            <td>{i + 1}</td>
                            <td>
                                <img
                                    src={item.hero}
                                    height={100}
                                    alt={item.title} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <div class="form-check form-switch">
                                    <input
                                        onChange={e => handlePublish(i)}
                                        checked={item.publish}
                                        class="form-check-input"
                                        type="checkbox"
                                        id="id" />
                                    <label class="form-check-label" for="id">Publish</label>
                                </div>
                            </td>
                            <td style={{ minWidth: "100px" }}>
                                <button
                                    type="button"
                                    onClick={e => setEdit({ ...item, index: i })}
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    class="btn btn-outline-warning btn-sm">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                    onClick={e => handleDelete(item.title)}
                                    type="button"
                                    class="btn btn-outline-danger btn-sm">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
        : <h6>No Blogs Found</h6>
    return <div className="container my-4">

        <div className="text-end my-4">
            <button
                data-bs-toggle="modal"
                data-bs-target="#addBlog"
                type="button"
                class="btn btn-primary">+ Add Blog</button>
        </div>

        {BLOG_TABLE}

        <div class="modal fade" id="addBlog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Blog</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <pre>{JSON.stringify(formik.values)}</pre>
                        <pre>{JSON.stringify(formik.errors)}</pre>
                        <form onSubmit={formik.handleSubmit}>
                            {
                                config.map(item => <div key={item.fieldName} className="my-2">
                                    <input
                                        {...formik.getFieldProps(item.fieldName)}
                                        className="form-control"
                                        type="text"
                                        placeholder={item.label} />
                                </div>)
                            }
                            <button
                                data-bs-dismiss="modal"
                                type="submit"
                                class="btn btn-primary">Create Blog</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>


        <div class="modal fade" id="editModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={eformik.handleSubmit}>
                            {
                                config.map(item => <div
                                    className='my-2'
                                    key={item.title}>
                                    <input
                                        type="text"
                                        {...eformik.getFieldProps(item.fieldName)}
                                        value={eformik.values[item.fieldName]}
                                        className='form-control' />
                                </div>)
                            }
                            <button data-bs-dismiss="modal" type="submit" class="btn btn-primary">Update Blog</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Dashboard