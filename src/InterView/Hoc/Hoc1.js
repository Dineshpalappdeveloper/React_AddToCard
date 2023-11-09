import React from 'react'
import { useState } from 'react'

const Hoc1 = () => {
    return (
        <div>Hoc1

            <HocRed data={<Counter />} />
            <h1>Second</h1>
            <HocGreen data={<Counter />} />
        </div>
    )
}
function HocRed(props) {
    return (
        <h1 style={{ backgroundColor: "red", height: "100px", width: "100px" }}> {props.data} </h1>
    )
}
function HocGreen(props) {
    return (
        <h1 style={{ backgroundColor: "green", height: "100px", width: "100px" }}> {props.data} </h1>
    )
}
function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default Hoc1