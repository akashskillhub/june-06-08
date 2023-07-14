import React, { useState } from 'react'

const Mystate = () => {
    // hooks
    const [user, setUser] = useState("Ross")
    return <div>
        <h1>{user}</h1>
        <button onClick={() => setUser("Monica")}>chcnge</button>
    </div >
}

export default Mystate