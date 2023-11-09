import React from 'react'
import { useState } from 'react'
import Chil from './Chil'

const Parent = () => {
    const [data, setData] = useState("Dinesh")
    function getData(data) {
        setData(data)
    }
    return (
        <div>
            <h1>Parent : {data} </h1>
            <Chil value={getData} />
        </div>
    )
}

export default Parent