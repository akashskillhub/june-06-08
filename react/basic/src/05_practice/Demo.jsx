import React from 'react'

const Demo = ({ fnames }) => {

    const user = { name: "john" }
    const arr = [55, 33, 11]
    // fragment
    return <>
        {/* <ProductCard
            nav={fnames}
            x="dell"
            price={100}
            z={arr}
            p={user} /> */}
        <ProductCard>
            <h1>hello from mars</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </ProductCard>

    </>
}

const ProductCard = ({ x, price, z, p, nav, children }) => {
    return <>
        {children}
    </>
}

export default Demo