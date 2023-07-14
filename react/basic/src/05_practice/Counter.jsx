import React, { useState } from 'react'

const Counter = () => {
    // let count = 100
    const [count, setCount] = useState(0)
    const inc = () => setCount(count < 5 ? count + 1 : count)
    const dec = () => setCount(count > 0 ? count - 1 : count)
    // const dec = () => setCount(count === 0 ? count : count - 1)
    const [inp, setInp] = useState()

    return <>
        <button onClick={dec}>-1</button>
        <h1>{count}</h1>
        <button onClick={inc}>+1</button>
        <hr />
        <h1>{inp}</h1>
        <input type="text" onChange={e => setInp(e.target.value)} />

    </>
}

export default Counter