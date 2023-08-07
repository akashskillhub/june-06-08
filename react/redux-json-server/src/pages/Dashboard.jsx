import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, getAllTodos } from '../redux/actions/todoActions'

const Dashboard = () => {
    const { todos, todoCreate, error, todoDelete } = useSelector(state => state.notes)
    const [userResponse, setUserResponse] = useState({
        task: "taks 1",
        desc: "desc 1",
        priority: 1
    })
    const callAction = useDispatch()
    useEffect(() => {
        callAction(getAllTodos())
    }, [todoCreate, todoDelete])
    if (error) {
        return <h1>{error}</h1>
    }
    return <>
        <button onClick={e => callAction(createTodo(userResponse))}> +add</button>
        <hr />
        {
            todos.map(item => <div key={item.id}>
                <strong>{item.task}</strong>
                <button onClick={e => callAction(deleteTodo(item.id))}>delete</button>
            </div>)
        }
        {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </>
}

export default Dashboard