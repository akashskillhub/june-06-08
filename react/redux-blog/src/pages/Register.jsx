import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const [userResponse, setUserResponse] = useState({
        name: "john",
        email: "john@email.com",
        password: "123"
    })
    const handleChange = e => setUserResponse({
        ...userResponse,
        [e.target.name]: e.target.value
    })
    const callAction = useDispatch()
    const navigate = useNavigate()
    const handleRegister = e => {
        // navigate("/login")
        callAction(registerUser(userResponse))
    }
    const { register } = useSelector(state => state.clients)
    useEffect(() => {
        if (register) {
            navigate("/login")
            toast.success(`${userResponse.name} Register Success`)
        }
    }, [register])
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Signup</div>
                    <div class="card-body">
                        <div>
                            <label for="name" class="form-label">First name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                name='name'
                                value={userResponse.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                            <label for="email" class="form-label">First Email</label>
                            <input
                                type="text"
                                class="form-control"
                                id="email"
                                name='email'
                                value={userResponse.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="text"
                                class="form-control"
                                name="password"
                                value={userResponse.password}
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a password.</div>
                        </div>
                        <div class="mt-2">
                            <label for="cpassword" class="form-label"
                            >Confirm Password</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="cpassword"
                                placeholder="Confirm Your Password"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">
                                Please Recheck Your Password.
                            </div>
                        </div>
                        <button onClick={handleRegister} type="button" class="btn btn-primary w-100 mt-3">
                            Signup
                        </button>
                        <p class="text-center mt-3">
                            Already Have Account? <a href="#">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Register