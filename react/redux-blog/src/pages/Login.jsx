import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/store'

const Login = () => {
    const [userresponse, setUserresponse] = useState({
        email: "john@email.com",
        password: "123"
    })
    const handleChange = e => {
        setUserresponse({
            ...userresponse,
            [e.target.name]: e.target.value
        })
    }
    const callAction = useDispatch()
    const handleLogin = e => {
        callAction(loginUser(userresponse))
    }
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div>
                            <label for="email" class="form-label">First Email</label>
                            <input
                                type="text"
                                class="form-control"
                                id="email"
                                name='email'
                                value={userresponse.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name='password'
                                value={userresponse.password}
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button
                            onClick={handleLogin}
                            type="button" class="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p class="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login