import React from 'react'
import { useRef } from 'react'

const UseRef11 = () => {
    const nameRef = useRef(null)
    return (
        <div>
            <h1>UseRef11</h1>
            <input type='text' ref={nameRef} />
            <button onClick={() => nameRef.current.value = "2000"} >Submit</button>
        </div>
    )
}

export default UseRef11