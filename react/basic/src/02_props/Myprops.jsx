import React from 'react'

const Myprops = ({ brand, price, users }) => {
    const demo = ['msi', "gigabyte", "asus"]
    return <div>
        <h1>{brand}</h1>
        <h1>{price}</h1>
        {/* Prop Drilling */}
        <UserCard x={users} />
        <UserCard x={demo} />
    </div>
}

const UserCard = ({ x }) => {
    return <div>
        {
            x.map(item => <p key={item}>{item}</p>)
        }
    </div>

}

export default Myprops