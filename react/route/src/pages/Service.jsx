import React from 'react'
import { useParams } from 'react-router-dom'

const Service = () => {
    const { id } = useParams()

    return <>
        <div class="card">
            <div class="card-body">{id}</div>
        </div>
    </>
}

export default Service