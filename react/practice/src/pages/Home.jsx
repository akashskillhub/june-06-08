import React from 'react'

const Home = () => {
    const products = [
        { id: 1, name: "fake product 1", price: 100 },
        { id: 2, name: "fake product 2", price: 10 },
        { id: 3, name: "fake product 3", price: 400 },
    ]
    const CONTENT = <>
        {
            products.map(item => <div key={item.id}>
                <h1>{item.name}</h1>
                <p>Id : {item.id}</p>
                <p>Price : {item.price}</p>
            </div>)
        }
    </>
    const CARDS = <div className='container'>
        <div className="row">
            {
                products.map(item => <div className='col-sm-4'>
                    <div class="card">
                        <div class="card-header">{item.name}</div>
                        <div class="card-body">
                            <p>Price : {item.price}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    </div>
    const TABLE = <div className='container'>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button type="button" class="btn btn-warning">edit</button>
                            <button type="button" class="btn btn-danger mx-2">delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    return <>
        {/* {CONTENT} */}
        {/* {CARDS} */}
        {TABLE}
    </>
}

export default Home