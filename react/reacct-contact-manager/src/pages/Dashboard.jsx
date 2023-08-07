import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState()
    const [response, setResponse] = useState({
        mobile: 898989,
        name: "ross",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    })
    const handleAdd = e => {
        setContacts([...contacts, { ...response, id: contacts.length + 1 }])
        toast.success("Contact Created Success")
    }
    const handleChange = e => {
        setResponse({ ...response, [e.target.name]: e.target.value })
    }
    const CONTACT_TABLE = contacts.length === 0
        ? <h1>No Contacts Found</h1>
        : <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>mobile</th>
                        <th>avatar</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contacts.map((item, i) => <tr key={item.name + i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>
                                <img src={item.avatar} height={50} alt="" />
                            </td>
                            <td>
                                <button
                                    onClick={e => setSelectedContact(item)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#editmodal"
                                    className='btn btn-outline-warning btn-sm '>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                    onClick={e => setSelectedContact(item)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                    className='btn btn-outline-danger btn-sm mx-2'>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>


    const handleDelete = e => {
        setContacts(contacts.filter(item => item.id != selectedContact.id))
        toast.info("Contact Delete Success")
    }
    const handleEditChange = e => {
        setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
    }
    const handleUpdateContact = e => {
        const index = contacts.findIndex(item => item.id === selectedContact.id)
        const copy = [...contacts]
        copy[index] = selectedContact
        setContacts(copy)

    }
    return <>
        <div className="container">
            <div className='text-end'>
                <button data-bs-toggle="modal" data-bs-target="#add" type="button" class="btn btn-primary">+ Add</button>
            </div>
        </div>

        <hr />
        <div className="container">
            {CONTACT_TABLE}
        </div>


        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {/* <pre>{JSON.stringify(contacts, null, 2)}</pre> */}
                        <div className="form-floating">
                            <input onChange={handleChange} className='form-control' name='name' value={response.name} placeholder='Enter name' type="text" /> <br />
                            <label htmlFor="">name</label>
                        </div>
                        <div className="form-floating">
                            <input onChange={handleChange} className='form-control' name='mobile' value={response.mobile} placeholder='Enter mobile' type="text" /> <br />
                            <label htmlFor="">mobile</label>
                        </div>
                        <div className="form-floating">
                            <input onChange={handleChange} className='form-control' name='avatar' value={response.avatar} placeholder='Enter avatar URL' type="text" /><br />
                            <label htmlFor="">avatar</label>
                        </div>
                        <button data-bs-dismiss="modal" onClick={handleAdd}>add</button><br />
                    </div>

                </div>
            </div>
        </div>

        {/* delete modal */}

        <div class="modal fade" id="deleteModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h1>Are you sure ?</h1>
                        <div className='text-end'>
                            <button
                                type="button"
                                onClick={handleDelete}
                                data-bs-dismiss="modal"
                                class="btn btn-danger mx-3">yes</button>
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                class="btn btn-success">no</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        {/* edit modal */}

        <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            name="name"
                            onChange={handleEditChange}
                            value={selectedContact && selectedContact.name} type="text" />
                        <input
                            name="mobile"
                            onChange={handleEditChange}
                            value={selectedContact && selectedContact.mobile} type="text" />
                        <input
                            name="avatar"
                            onChange={handleEditChange}
                            value={selectedContact && selectedContact.avatar} type="text" />
                        <button data-bs-dismiss="modal">cancel </button>
                        <button onClick={handleUpdateContact} data-bs-dismiss="modal">update </button>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Dashboard