import React from 'react'
import { useState } from 'react'

const Chil = (props) => {
    const [text, setText] = useState("")
    return (
        <div>
            <h2>Chil</h2>
            {/* <input type='text'   */}
            <button onClick={() => props.value("Ganesh")}>Update</button>
        </div>
    )
}

export default Chil