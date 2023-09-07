import React, { useEffect, useState } from 'react'
import useDymanicForm from '../../hooks/useDymanicForm'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, getProducts, updateProduct } from '../../redux/actions/adminActions'
import { invalidate } from '../../redux/slices/adminSlice'
import { toast } from 'react-toastify'

const Products = () => {
    const callAction = useDispatch()


    const handleSubmit = e => {
        callAction(addProduct(state))
    }
    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "image", type: "text" },
        { fieldName: "price", type: "number" },
        { fieldName: "sizes", type: "checkbox", options: ["sm", "md", "lg"] },
        { fieldName: "colors", type: "checkbox", options: ["red", "blue", "yellow"] },
        { fieldName: "brand", type: "text" },
        { fieldName: "Add Product", type: "submit", onClick: handleSubmit },
    ]
    const [ui, state, pre] = useDymanicForm(config)
    const { productAdd, productDeleted, productUpdated } = useSelector(state => state.admin)
    useEffect(() => {
        callAction(getProducts())
        callAction(invalidate())
    }, [productAdd, productDeleted, productUpdated])
    useEffect(() => {
        if (productAdd) {
            toast.success("Product Create Success")
        }
    }, [productAdd])
    useEffect(() => {
        if (productDeleted) {
            toast.success("Product Delete Success")
        }
    }, [productDeleted])


    return <>
        <div className='text-right'>
            <button className="btn btn-primary" onClick={() => window.my_modal_3.showModal()}>
                + Add Product
            </button>
        </div>

        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                <div className='mt-8'>
                    {ui}
                </div>
            </form>
        </dialog>

        <ProductTable />
    </>
}

const ProductTable = () => {
    const { products } = useSelector(state => state.admin)
    const callAction = useDispatch()
    const [selectedProduct, setSelectedProduct] = useState()

    const handleChange = e => {
        const { value, name, checked, type } = e.target
        if (type === "checkbox") {
            checked
                ? setSelectedProduct({
                    ...selectedProduct,
                    [name]: selectedProduct[name] ? [...selectedProduct[name], value] : [value]
                })
                : setSelectedProduct({
                    ...selectedProduct,
                    [name]: selectedProduct[name].filter(item => item !== value)
                })

        } else {
            setSelectedProduct({ ...selectedProduct, [name]: value })
        }
    }
    const handleUpdate = e => {
        callAction(updateProduct(selectedProduct))
        setSelectedProduct(null)
    }
    return <>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>size</th>
                        <th>brand</th>
                        <th>colors</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(item => {
                            return selectedProduct && selectedProduct.id === item.id
                                ? <>
                                    <tr>
                                        <td> <input name='image' onChange={handleChange} type="text" value={selectedProduct.image} /> </td>
                                        <td> <input name='name' onChange={handleChange} type="text" value={selectedProduct.name} /> </td>
                                        <td> <input name='price' onChange={handleChange} type="text" value={selectedProduct.price} /> </td>
                                        <td>
                                            {
                                                selectedProduct.sizes.map(s => <div>
                                                    <input name='sizes' onChange={handleChange} type="checkbox" id='s' value={s} />
                                                    <label htmlFor={s}>{s}</label>
                                                </div>)
                                            }
                                        </td>
                                        <td>
                                            <input name='brand' onChange={handleChange} type="text" value={selectedProduct.brand} />
                                        </td>
                                        <td>
                                            {
                                                selectedProduct.colors.map(s => <div>
                                                    <input name='colors' onChange={handleChange} type="checkbox" id='s' value={s} />
                                                    <label htmlFor={s}>{s}</label>
                                                </div>)
                                            }
                                        </td>
                                        <td>
                                            <button onClick={handleUpdate} className="btn btn-warning">Update</button>
                                        </td>
                                    </tr>
                                </>
                                : <>
                                    <tr key={item.name}>
                                        <td> <img src={item.image} className='w-24' alt="" /> </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.sizes.map(s => <span className='mx-1 badge badge-primary '>{s}</span>)}</td>
                                        <td>{item.brand}</td>
                                        <td className='flex gap-2'>{item.colors.map(c => <div
                                            className={` w-4 h-4 border-2 border-slate-200 border-solid  rounded-full bg-[${c}]`}></div>)}
                                        </td>
                                        <td>
                                            <button
                                                onClick={e => setSelectedProduct(item)}
                                                className="btn mx-1 btn-sm btn-warning">edit</button>
                                            <button
                                                onClick={e => callAction(deleteProduct(item))}
                                                className="btn mx-1 btn-sm btn-error"
                                            >delete</button>
                                        </td>
                                    </tr>
                                </>
                        })
                    }
                </tbody>

            </table>
        </div>
    </>
}

export default Products


