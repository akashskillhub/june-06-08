import React from 'react'

const Practice = () => {
    const user = "Kate"
    const todos = ["task 1", "task 1"]
    const obj = { name: "rachel" }

    return <div>
        <h1>Practice</h1>
        <h1>my name is {user} </h1>
        <hr />
        <h1>{todos}</h1>

        <ul>
            {todos.map((item, i) => <li key={item + i}>{item}</li>)}
        </ul>
        <h1>{obj.name}</h1>
        <pre>asdad\\\
            a
            b


            x
        </pre>
        <pre>{JSON.stringify(obj, null, 2)}</pre>
    </div>
}

export default Practice