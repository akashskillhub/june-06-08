import React, { useContext } from 'react'
import { BlogContext } from '../App'

const GreatGrandChild = ({ brands }) => {
    const x = useContext(BlogContext)
    console.log(x)
    return <>
        <div>GreatGrandChild</div>
        {brands}

        {
            x.map(item => <h1 key={item.title}>{item.title}</h1>)
        }
    </>
}

export default GreatGrandChild