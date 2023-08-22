import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/adminAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userResponse, setUserResponse] = useState({
        email: "admin@gmail.com",
        password: 123
    })
    const callAction = useDispatch()
    const handleSubmit = () => {
        callAction(login(userResponse))
    }
    const { auth, error, loading } = useSelector(state => state.admin)
    const navigate = useNavigate()
    useEffect(() => {
        if (auth) {
            toast.success("Login Success")
            if (auth.role === "admin") {
                navigate("/admin")
            }
        } else if (error) {
            toast.error(error)
        }
    }, [auth, error])
    // const [response, setResponse] = useState({
    //     email: "john@gmail.com",
    //     skills: []
    // })
    // const handleChange = e => {

    //     const { value, name, checked } = e.target
    //     setResponse({
    //         ...response,
    //         [name]: checked
    //             ? [...response[name], value]
    //             : response[name].filter(item => item !== value)
    //     })
    //     // if (checked) {
    //     //     setResponse({
    //     //         ...response,
    //     //         // [name]: [...response[name], value]
    //     //         [e.target.name]: [...response[e.target.name], e.target.value]
    //     //     })

    //     // } else {
    //     //     setResponse({
    //     //         ...response,
    //     //         // [name]: [...response[name], value]
    //     //         [e.target.name]: response[e.target.name].filter(item => item !== e.target.value)
    //     //     })
    //     // }
    // }

    // return <>
    //     <pre>{JSON.stringify(response, null, 2)}</pre>
    //     <input onChange={handleChange} name='skills' type="checkbox" value='React' id='React' /> <label htmlFor="React">React</label>
    //     <input onChange={handleChange} name='skills' type="checkbox" value='Redux' id='Redux' /> <label htmlFor="Redux">Redux</label>
    //     <input onChange={handleChange} name='skills' type="checkbox" value='TypeScript' id='TypeScript' /> <label htmlFor="TypeScript">TypeScript</label>
    //     <input onChange={handleChange} name='skills' type="checkbox" value='NextJs' id='NextJs' /> <label htmlFor="NextJs">NextJs</label>
    // </>
    if (loading) return <div class="spinner-border text-primary"></div>
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <div>
                            <label for="email" className="form-label">First Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className="mt-2">
                            <label for="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p className="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login