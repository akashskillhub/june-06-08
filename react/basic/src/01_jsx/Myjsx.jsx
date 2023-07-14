import React from 'react'

const Myjsx = () => {
    const x = 10
    const brand = "dell"
    const active = false
    const arr = [10, 20, 30]
    const obj = { name: "john" }
    const user = [{ name: "ross" }]
    const getPrice = arg => arg + 100
    return <div>
        <h1>valu of x = {x + x}</h1>
        <h1>{brand}</h1>
        <h1>{active ? "True" : "False"}</h1>
        <h1>{arr}</h1>
        <h1>{obj.name}</h1>
        <h1>{user[0].name}</h1>
        <h1>{getPrice(20)}</h1>
        <ul>
            {arr.map(item => <li>{item}</li>)}
        </ul>
    </div>
}

export default Myjsx