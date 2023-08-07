import React from 'react'
import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({ z }) => {
    return <>
        <div>GrandChild</div>

        <hr />
        <GreatGrandChild brands={z} />
    </>
}

export default GrandChild