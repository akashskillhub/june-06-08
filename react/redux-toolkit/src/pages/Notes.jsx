import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, getTodos, removeTodo } from '../redux/todoActions'

const Notes = () => {
    const callAction = useDispatch()
    const { loading, todoAdded, error, todos } = useSelector(state => state.notes)
    useEffect(() => {
        callAction(getTodos())
    }, [])
    return <>
        <button onClick={e => callAction(createTodo({
            task: "Learn Redux Toolkit",
            desc: "😲 its so easy",
            priority: "very high"
        }))}>Add Todo</button>
        <hr />
        <ul>
            {todos.map(item => <li key={item.id}>
                <div style={{ border: "2px solid red" }}>
                    <h6>{item.task}</h6>
                    <p>{item.desc}</p>
                    <p>{item.priority}</p>
                    <button onClick={e => callAction(removeTodo(item.id))}>Remove</button>
                </div>
            </li>)}
        </ul>
    </>
}

export default Notes