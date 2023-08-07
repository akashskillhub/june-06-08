import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../redux/actions/todoActions'

const Todo = () => {
    const [userResponse, setUserResponse] = useState({
        task: "Learn Redux",
        priority: 1
    })
    const handleChange = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }
    const callAction = useDispatch()
    const { todos } = useSelector(state => state.mazeTodos)
    return <>
        <input
            type="text"
            value={userResponse.task}
            onChange={handleChange}
            name="task"
        />
        <select
            value={userResponse.priority}
            onChange={handleChange}
            name="priority"
        >
            <option selected>Choose Priority</option>
            <option value="1">high</option>
            <option value="2">meduim</option>
            <option value="3">low</option>
        </select>
        <button onClick={e => callAction(createTodo(userResponse))}>add</button>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
}

export default Todo