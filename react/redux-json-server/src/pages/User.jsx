import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userService'

const User = () => {
    const callAction = useDispatch()
    const handleAddUser = () => {
        callAction(addUser("john"))
    }
    return <>
        <button onClick={handleAddUser} >add user</button>
    </>
}

export default User