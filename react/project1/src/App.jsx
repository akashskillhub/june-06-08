import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTour, deleteTour } from './redux/store'

const App = () => {
  const [userResponse, setUserResponse] = useState({
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
    name: "awesome tour",
    price: 898,
    location: "london"
  })
  const { tours } = useSelector(state => state.packages)
  const callAction = useDispatch()
  const handleClick = e => {
    callAction(addTour(userResponse))
  }
  const handleChange = e => {
    setUserResponse({
      ...userResponse,
      [e.target.name]: e.target.value
    })
  }
  return <>

    <input name="url" onChange={handleChange} value={userResponse.url} type="text" />
    <input name="name" onChange={handleChange} value={userResponse.name} type="text" />
    <input name="price" onChange={handleChange} value={userResponse.price} type="text" />
    <input name="location" onChange={handleChange} value={userResponse.location} type="text" />

    <button onClick={handleClick}>add</button>
    <hr />

    <div className="container">
      <div className="row">
        {tours.map(item => <div className="col-sm-4" key={item.name}>
          <div class="card my-3">

            <img src={item.url} className='img-fluid' alt="" />
            <div class="card-body">
              <h3>{item.name}</h3>
              <h6>price : {item.price}</h6>
              <h5>location : {item.location}</h5>
              <button
                onClick={e => callAction(deleteTour(item.name))}
                type="button"
                class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>)}
      </div>
    </div>

    <pre>{JSON.stringify(tours, null, 2)}</pre>
  </>
}

export default App