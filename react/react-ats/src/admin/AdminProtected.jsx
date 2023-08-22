import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ compo }) => {
    const { auth } = useSelector(state => state.admin)
    return auth ? compo : <Navigate to="/" />
}

export default AdminProtected