import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const { auth } = useSelector(state => state.clients)
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            toast.error("user logout success")
            navigate("/login")
        }
    }, [auth])
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard