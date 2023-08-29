import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const images = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://plus.unsplash.com/premium_photo-1670509096112-995f9414ca01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        "https://images.unsplash.com/photo-1617606002806-94e279c22567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
    ]
    useEffect(() => {
        let t = setInterval(() => {
            // setSelectedImage(pre => (pre + 1) % images.length)
            setSelectedImage(pre => pre === images.length - 1 ? 0 : pre + 1)

        }, 5000)
        return () => {
            clearInterval(t)
        }

    }, [])

    return <>
        <button onClick={e => setSelectedImage(pre => pre === 0 ? images.length - 1 : pre - 1)}>pre</button>
        <button onClick={e => setSelectedImage(pre => pre === images.length - 1 ? 0 : pre + 1)}>next</button>
        <img
            src={images[selectedImage]}
            alt="" />
    </>
}

export default Carousel