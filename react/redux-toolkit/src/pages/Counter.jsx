import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, decBy, inc, incBy } from '../redux/counterSlice'

const Counter = () => {
    const callAction = useDispatch()
    const { count } = useSelector(state => state.counter)
    const [num, setNum] = useState(100)
    return <>
        <input
            type="number"
            value={num}
            onChange={e => setNum(+e.target.value)} />
        <button onClick={e => callAction(inc())}>+1</button>
        <strong>{count}</strong>
        <button onClick={e => callAction(dec())}>-1</button>
        <hr />
        <button
            onClick={e => callAction(incBy(num))}>
            Inc By {num}
        </button>
        <button
            onClick={e => callAction(decBy(num))}>
            Dec By {num}
        </button>
    </>
}

export default Counter