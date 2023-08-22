import React, { useState } from 'react'

const Account = () => {
    const [userResponse, setUserResponse] = useState({})
    const config = [
        { fieldName: "fname", type: "text" },
        { fieldName: "password", type: "password" },
        { fieldName: "gender", type: "radio", options: ["male", "female"] },
    ]
    const handleChange = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }
    return <>
        {
            config.map(item => {
                if (item.type === "text" || item.type === "password") {
                    return <input
                        type={item.type}
                        name={item.fieldName}
                        onChange={handleChange}
                        placeholder={`Enter ${item.fieldName}`}
                        className='form-control my-2' />
                } else if (item.type === "radio") {
                    return item.options.map(o => <div>
                        <input type="radio" name={item.fieldName} />
                        <label htmlFor="">{o}</label>
                    </div>)
                }
            })
        }
        <hr />
        <pre>{JSON.stringify(userResponse, null, 2)}</pre>
    </>
}

export default Account