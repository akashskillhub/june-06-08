import React, { useState } from 'react'

const Todo = () => {
    let task
    const [todos, setTodos] = useState([])
    const handleAddTodo = () => {
        setTodos([...todos, task])
    }
    const handleDelet = i => {
        const copy = [...todos]
        copy.splice(i, 1)
        setTodos(copy)
    }
    const [selectedTask, setSelectedTask] = useState()
    const [i, setI] = useState()
    const handleUpdate = () => {

        console.log(i, selectedTask)
        const copy = [...todos]
        copy[i] = selectedTask
        setTodos(copy)
    }
    return <>


        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card mt-5">
                        <div className="card-header">Todos</div>
                        <div className="card-body">
                            <div className='input-group'>
                                <input className='form-control' type="text" onChange={e => task = e.target.value} />
                                <button className='btn btn-dark text-light' onClick={handleAddTodo}>add</button>
                            </div>
                        </div>
                    </div>
                    {
                        todos.map((item, index) => <div className='border border-2 p-2 my-2 d-flex justify-content-between' key={item}>
                            {item}
                            <div>
                                <button
                                    onClick={e => {
                                        setSelectedTask(item)
                                        setI(index)
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    className='btn btn-sm btn-outline-warning mx-2'>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                    className='btn btn-sm btn-outline-danger'
                                    onClick={e => handleDelet(index)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>


        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            onChange={e => setSelectedTask(e.target.value)}
                            type="text"
                            value={selectedTask} />
                        <button
                            data-bs-dismiss="modal"
                            onClick={handleUpdate}>update</button>
                    </div>

                </div>
            </div>
        </div>


    </>
}

export default Todo

// CRUD
// Creat
// Read
// Update
// Delete