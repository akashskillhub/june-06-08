

import { MdDelete, MdEditSquare } from "react-icons/md"

const Orders = () => {

    return <>
        <UserTable />
    </>
}

const UserTable = () => {
    const ORDERS = [
        {
            id: "11",
            products: [
                { name: "fake shoe", qty: 1 },
                { name: "new fake shoe", qty: 2 },
            ],
            amount: 24000,
            user: "ross",
            status: "dispatch"
        },
        {
            id: "12",
            products: [
                { name: "fake shoe", qty: 5 },
            ],
            amount: 90000,
            user: "john",
            status: "delivered"
        },
        {
            id: "13",
            products: [
                { name: "new shoe", qty: 1 },
            ],
            amount: 900,
            user: "kate",
            status: "transit"
        },
    ]
    return <>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>#</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ORDERS.map((item, i) => <tr key={item.id}>
                            <td> {item.id} </td>
                            <td>{item.products.map(p => <div
                                className="bg-slate-200 p-4 m-2 flex justify-between">
                                <span className="font-medium">{p.name}</span> <span>{p.qty}</span>
                            </div>)}
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.user}</td>
                            <td>{item.status}</td>

                            <td>
                                <button className="btn btn-outline btn-warning mx-1"><MdEditSquare /></button>
                                <button className="btn btn-outline btn-error mx-1"><MdDelete /></button>
                            </td>

                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    </>
}

export default Orders


