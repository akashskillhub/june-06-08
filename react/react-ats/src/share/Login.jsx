import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/adminAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions'
import { loginEmployer } from '../redux/actions/employerActions'

const Login = () => {
    const [userResponse, setUserResponse] = useState({
        email: "bill@gmail.com",
        password: 123,
        account: "user"
    })
    const callAction = useDispatch()
    const handleSubmit = () => {
        if (userResponse.account === "admin") {
            callAction(login(userResponse))
        } else if (userResponse.account === "user") {
            callAction(loginUser(userResponse))
        } else {
            callAction(loginEmployer(userResponse))
        }
    }
    const { auth, error, loading } = useSelector(state => state.admin)
    const { auth: employerAuth } = useSelector(state => state.employer)
    const { auth: userAuth, error: userError, loading: userLoading } = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (auth) {
            toast.success("Login Success")
            // if (auth.role === "admin") {
            navigate("/admin")
            // }
        } else if (error) {
            toast.error(error)
        } else if (userAuth) {
            toast.success(`Welcome Back ${userAuth.name}. Login Success`)
            navigate("/user")
        } else if (employerAuth) {
            toast.success(`Login Success`)
            navigate("/employer")
        }
    }, [auth, error, userAuth, employerAuth])

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
                                value={userResponse.email}
                                onChange={e => setUserResponse({
                                    ...userResponse, email: e.target.value
                                })}
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
                                value={userResponse.password}
                                onChange={e => setUserResponse({
                                    ...userResponse, password: e.target.value
                                })}
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>

                        <div className='my-2 d-flex gap-2'>
                            <input
                                checked={userResponse.account === "user"}
                                onChange={e => setUserResponse({
                                    ...userResponse,
                                    account: e.target.value
                                })}
                                className='form-check'
                                type="radio"
                                name="account"
                                value="user"
                                id='user' />
                            <label htmlFor="user">User</label>

                            <input
                                checked={userResponse.account === "employer"}
                                onChange={e => setUserResponse({
                                    ...userResponse,
                                    account: e.target.value
                                })}
                                className='form-check'
                                type="radio"
                                name="account"
                                value="employer"
                                id='employer' />
                            <label htmlFor="employer">Employer</label>

                            <input
                                checked={userResponse.account === "admin"}
                                onChange={e => setUserResponse({
                                    ...userResponse,
                                    account: e.target.value
                                })}
                                className='form-check'
                                type="radio"
                                name="account"
                                value="admin"
                                id='admin' />
                            <label htmlFor="admin">Admin</label>

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