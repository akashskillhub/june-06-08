import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions/userActions'
import useSerialize from '../hooks/useSerialize'
import useDynamicForm from '../hooks/useDynamicForm'
import { login } from '../redux/actions/adminAction'
import { toast } from 'react-toastify'

const Register = () => {

    const [wizard, setWizard] = useState("user")

    // return <>
    //     {x}
    //     {customForm}
    // </>
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className='d-flex border border-2 border-primary mb-4 rounded'>
                    <div
                        onClick={e => setWizard("user")}
                        className={`py-3 flex-grow-1 text-center ${wizard === "user" && "bg-primary text-light fw-bold"}`}>
                        User</div>
                    <div
                        onClick={e => setWizard("employer")}
                        className={`py-3 flex-grow-1 text-center ${wizard !== "user" && "bg-primary text-light fw-bold"} `}>
                        Employer</div>
                </div>
            </div>
        </div>

        {
            wizard === "user"
                ? <UserRegistration />
                : <EmployerRegistration />
        }
    </div>
}

const UserRegistration = () => {
    const dispatch = useDispatch()
    const { userRegister, loading, error } = useSelector(state => state.user)

    useEffect(() => {
        if (userRegister) {
            toast.success("User Register Success")
        } else if (error) {
            toast.error(error)
        }
    }, [userRegister, error])
    const handleSubmit = arg => {
        console.log(arg)
        dispatch(registerUser({ ...arg, role: "user" }))
    }
    const arr = [
        { fieldName: "name", type: "text", value: "" },
        { fieldName: "email", type: "email", value: "" },
        { fieldName: "password", type: "password", value: "" },
        { fieldName: "submit", type: "submit", value: "Register User", click: handleSubmit },
    ]
    const [state, customForm] = useDynamicForm(arr)
    const x = useSerialize(state)

    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">User Signup</div>
                    <div className="card-body">
                        {customForm}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const EmployerRegistration = () => {
    const dispatch = useDispatch()
    const { userRegister, loading, error } = useSelector(state => state.user)

    useEffect(() => {
        if (userRegister) {
            toast.success("User Register Success")
        } else if (error) {
            toast.error(error)
        }
    }, [userRegister, error])
    const handleSubmit = arg => {
        console.log(arg)
        dispatch(registerUser({ ...arg, role: "employer" }))
    }
    const arr = [
        { fieldName: "name", type: "text", value: "" },
        { fieldName: "email", type: "email", value: "" },
        { fieldName: "password", type: "password", value: "" },
        { fieldName: "submit", type: "submit", value: "Register User", click: handleSubmit },
    ]
    const [state, customForm] = useDynamicForm(arr)
    const x = useSerialize(state)

    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">User Signup</div>
                    <div className="card-body">
                        {customForm}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Register