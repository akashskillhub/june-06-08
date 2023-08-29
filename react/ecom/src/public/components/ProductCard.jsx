import React from 'react'

const ProductCard = () => {
    const products = [1, 2, 3, 4, 5]
    return <>
        <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto">
                <div class="grid grid-cols-4 gap-x-4 gap-y-5">
                    {
                        products.map(item => <div
                            class=" p-4 w-full hover:bottom-4   transition-transform hover:-translate-y-[0.5rem]  duration-300 hover:shadow-sm  relative cursor-pointer" >
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block hover:scale-150 transition-all duration-300 " src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                            </a>
                            <div class="mt-4">
                                <h3 class=" text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p class="mt-1">$16.00</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default ProductCard