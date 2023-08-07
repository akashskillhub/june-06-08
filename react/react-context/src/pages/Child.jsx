import React from 'react'
import GrandChild from './GrandChild'

const Child = ({ demo }) => {
    return <>
        <div>Child</div>

        <hr />
        <GrandChild z={demo} />
    </>
}

export default Child