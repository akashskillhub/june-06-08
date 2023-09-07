import React from 'react'

const useSerialize = (arg) => {
    return <pre>{JSON.stringify(arg, null, 2)}</pre>
}

export default useSerialize