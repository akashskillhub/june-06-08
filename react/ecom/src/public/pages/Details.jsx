import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart, getPublicSelectedProduct } from '../../redux/actions/publicActions'

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { selectedProduct } = useSelector(state => state.public)
    const [userChoice, setUserChoice] = useState({
        size: "",
        color: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUserChoice({ ...userChoice, [name]: value })
    }
    useEffect(() => {
        dispatch(getPublicSelectedProduct(id))
    }, [])
    const images = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://plus.unsplash.com/premium_photo-1670509096112-995f9414ca01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        "https://images.unsplash.com/photo-1617606002806-94e279c22567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
    ]
    const [index, setIndex] = useState(0)
    const [qty, setQty] = useState(1)

    const handleCart = e => {
        console.log({
            ...selectedProduct,
            ...userChoice,
            qty
        })
        const x = { ...selectedProduct }
        delete x.id
        dispatch(addToCart({
            ...x,
            ...userChoice,
            qty
        }))
    }
    return <>
        {
            selectedProduct && <section class="text-gray-600 body-font overflow-hidden p-10">
                <div class="container px-5 py-24 mx-auto">
                    {/* <div class="lg:w-4/5 mx-auto flex gap-2 "> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2  ">
                        <div className='flex flex-col md:flex-row gap-2 items-start'>
                            <div className='flex md:block flex-wrap order-2  md:order-1'>
                                {
                                    images.map((item, i) => <img
                                        src={item}
                                        onMouseEnter={e => setIndex(i)}
                                        alt=""
                                        className='w-36 rounded-sm mb-2 cursor-pointer'
                                    />)
                                }
                            </div>
                            <img alt="ecommerce" class="order-1 md:order-2  flex-1 md:w-4/5 object-cover object-center rounded" src={selectedProduct.image} />
                        </div>
                        <div class="  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{selectedProduct.brand}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{selectedProduct.name}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <div className="rating ">
                                        <input type="radio" name="rating-1" className=" bg-red-400 mask mask-star" />
                                        <input type="radio" name="rating-1" className=" bg-red-400 mask mask-star" />
                                        <input type="radio" name="rating-1" className=" bg-red-400 mask mask-star" />
                                        <input type="radio" name="rating-1" className=" bg-red-400 mask mask-star" checked />
                                        <input type="radio" name="rating-1" className=" bg-red-400 mask mask-star" />
                                    </div>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>

                            </div>
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex mt-6 justify-between p-4 bg-slate-50 rounded-md items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <button
                                    onClick={e => setQty(qty === 1 ? 1 : qty - 1)}
                                    className="btn">-1</button>
                                <strong className='text-2xl'>{qty}</strong>
                                <button
                                    onClick={e => setQty(qty === 10 ? 10 : qty + 1)}
                                    className="btn">+1</button>

                            </div>
                            <select name="size" onChange={handleChange} className="select select-bordered w-full my-4">
                                <option disabled selected>Choose Size</option>
                                {
                                    selectedProduct.sizes.map(s => <option value={s}>{s}</option>)
                                }
                            </select>
                            <select name="color" onChange={handleChange} className="select select-bordered w-full my-4">
                                <option disabled selected>Choose color</option>
                                {
                                    selectedProduct.colors.map(s => <option value={s}>{s}</option>)
                                }
                            </select>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">${selectedProduct.price}</span>
                                <button onClick={handleCart} class="flex ml-auto  btn">Add To Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
    </>
}

export default Details