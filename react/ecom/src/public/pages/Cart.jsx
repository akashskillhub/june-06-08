import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../redux/actions/publicActions'

const Cart = () => {
    const { cart } = useSelector(state => state.public)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!cart) {
            dispatch(getCartItems())
        }
    }, [])
    return <>
        <section class=" bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-center">
                    <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
                </div>

                <div class="mx-auto mt-8 max-w-2xl md:mt-12">
                    <div class="bg-white shadow">
                        <div class="px-4 py-6 sm:px-8 sm:py-10">
                            <div class="flow-root">
                                <ul class="-my-8">
                                    {
                                        cart && cart.map(item => <li class=" flex gap-5 space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                            <div class="shrink-0">
                                                <img src={item.image} className='h-24' alt="" />
                                            </div>

                                            <div class="relative flex flex-1 flex-col justify-between">
                                                <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                    <div class="pr-8 sm:pr-5">
                                                        <p class="text-base font-semibold text-gray-900">{item.name}</p>
                                                        <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">{item.size}</p>
                                                    </div>

                                                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                        <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$ {item.price}</p>

                                                        <div class="sm:order-1">
                                                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                                                <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                                <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                                                <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </li>)
                                    }

                                </ul>
                            </div>

                            <div class="mt-6 border-t border-b py-2">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-400">Subtotal</p>
                                    <p class="text-lg font-semibold text-gray-900">$<span className='font-bold'>{cart && cart.reduce((sum, item) => sum + (item.qty * item.price), 0)}</span></p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-400">Shipping</p>
                                    <p class="text-lg font-semibold text-gray-900">$800.00</p>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Total</p>
                                <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> <span className='font-bold'>{cart && cart.reduce((sum, item) => sum + (item.qty * item.price), 800)}</span></p>
                            </div>

                            <div class="mt-6 text-center">
                                <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                    Checkout
                                    <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Cart