import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counterActions'

const Counter = () => {
    const { count } = useSelector(state => state.counter)
    const callAction = useDispatch()
    return <>
        <button onClick={e => callAction(decrement())}>+1</button>
        <h1>{count}</h1>
        <button onClick={e => callAction(increment())}>+1</button>
    </>
}

export default Counter