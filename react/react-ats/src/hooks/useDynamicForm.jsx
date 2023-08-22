import { useState } from "react"

const useDynamicForm = config => {
    const [response, setResponse] = useState({})
    const handleChange = e => {
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                console.log("check zala");
                setResponse({
                    ...response,
                    [e.target.name]: response[e.target.name]
                        ? [...response[e.target.name], e.target.value]
                        : [e.target.value]
                })
            } else {
                console.log("uncheck zala")
                setResponse({
                    ...response,
                    [e.target.name]: response[e.target.name].filter(item => item !== e.target.value)
                })
            }

        } else {
            setResponse({ ...response, [e.target.name]: e.target.value })
        }
    }

    const handleInputs = item => {
        switch (item.type) {
            case "text":
            case "email":
            case "date":
            case "color":
            case "number":
            case "password": return <div className="form-floating my-2">
                <input
                    className="form-control"
                    name={item.fieldName}
                    onChange={handleChange}
                    placeholder={`Enter ${item.fieldName}`}
                    type={item.type}
                />
                <label htmlFor="">{`Enter ${item.fieldName}`}</label>
            </div>

            case "select": return <div className="my-2">
                <select
                    className="form-control"
                    name={item.fieldName}
                    onChange={handleChange} >
                    <option value="">Choose {item.fieldName}</option>
                    {
                        item.options.map(o => <option value={o}>{o}</option>)
                    }
                </select>
            </div>
            case "radio": return <div className="my-2">
                {item.fieldName} :
                {item.options.map(r => <>

                    <input
                        className="form-check-input mx-3"
                        onChange={handleChange}
                        name={item.fieldName}
                        id={r}
                        value={r}
                        type="radio" />
                    <label htmlFor={r}>{r}</label>
                </>)}
            </div>
            case "checkbox": return <div className="my-2">
                {item.fieldName} :
                {item.options.map(r => <>

                    <input
                        className="form-check-input mx-3"
                        onChange={handleChange}
                        name={item.fieldName}
                        id={r}
                        value={r}
                        type="checkbox" />
                    <label htmlFor={r}>{r}</label>
                </>)}
            </div>

            case "submit": return <button
                type="submit"
                onClick={e => item.click(response)}
                className="btn btn-primary w-100 btn-lg my-2">
                {item.value}
            </button>
            default: return ""
        }
    }
    const customForm = <>
        {config.map(item => handleInputs(item))}
    </>
    return [response, customForm]
}

export default useDynamicForm