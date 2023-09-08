import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicProducts } from '../../redux/actions/publicActions'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.public)
    useEffect(() => {
        dispatch(getPublicProducts())
    }, [])
    // const products = [1, 2, 3, 4, 5]
    return <>
        <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-5">
                    {
                        products && products.map(item => <Link to={`/product/${item.id}`}
                            class=" p-4 w-full hover:bottom-4   transition-transform hover:-translate-y-[0.5rem]  duration-300 hover:shadow-sm  relative cursor-pointer" >
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block hover:scale-150 transition-all duration-300 " src={item.image} />
                            </a>
                            <div class="mt-4">
                                <h3 class=" text-gray-500 text-xs tracking-widest title-font mb-1">{item.brand}</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">
                                    {item.name}
                                </h2>
                                <p class="mt-1">₹{item.price}</p>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default ProductCard