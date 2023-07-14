import React, { useState } from 'react'

const Todo = () => {
    let inp = ""
    const [task, setTask] = useState()
    return <>
        <h1>{task}</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">
                            <input
                                onChange={e => inp = e.target.value}
                                type="text"
                                className=' my-3 form-control' placeholder='Enter Task'
                                name=""
                                id="" />
                            <button
                                type="button"
                                onClick={e => setTask(inp)}
                                class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Todo