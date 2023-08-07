import React from 'react'
import Child from './Child'

const Parent = ({ demo }) => {

    return <>
        <div>parent</div>
        <hr />
        <Child demo={demo} />
    </>
}

export default Parent