import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UserProtected = ({ compo }) => {
    const { auth } = useSelector(state => state.user)
    return auth ? compo : <Navigate to="/" />
}

export default UserProtected