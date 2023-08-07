import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("inside useeffect")
    }, [count])

    useEffect(() => {
        console.log("empty dep. array")
        return () => {
            console.log("RETURN")
        }
    }, [])
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}> +1</button>
        <button onClick={e => setCount(0)}> reset</button>
    </>
}

export default Effect