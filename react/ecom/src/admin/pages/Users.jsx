import { MdDelete, MdEditSquare } from "react-icons/md"

const Users = () => {

    return <>
        <UserTable />
    </>
}

const UserTable = () => {
    const USERS = [
        {
            name: "ross",
            email: "ross@gmail.com",
            address: "fake address",
            mobile: 8888888888
        },
        {
            name: "joe",
            email: "joe@gmail.com",
            address: "fake address",
            mobile: 9999999999
        },
        {
            name: "rachel",
            email: "rachel@gmail.com",
            address: "fake address",
            mobile: 77777777777
        },
    ]
    return <>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Account</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        USERS.map((item, i) => <tr key={item.name}>
                            <td> {i + 1} </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.mobile}</td>
                            <td>
                                <div className="form-control w-28">
                                    <label className="cursor-pointer label ">
                                        <span className="label-text">Active</span>
                                        <input type="checkbox" className="toggle toggle-primary" />
                                    </label>
                                </div>
                            </td>
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

export default Users


