import React from 'react'

const Myevent = () => {
    let user = "ross"
    const handleClick = () => {
        user = "Monica"
        console.log(user)
    }
    return <div>
        <h1>{user}</h1>
        <button onClick={handleClick}>click me</button>
        <button onClick={() => console.log("clicked again")}>click me</button>
        <button onClick={() => handleClick()}>click me</button>
    </div >
}

export default Myevent