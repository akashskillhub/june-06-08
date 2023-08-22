import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { auth } = useSelector(state => state.clients)
    return auth ? compo : <Navigate to="/login" />

}

export default Protected