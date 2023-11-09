import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetch1 = () => {
    const [data, setData] = useState("")
    console.log(data);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json()).then((r) => setData(r))
    }, [])
    return (
        <div>
            <h2>Fetch1</h2>
            <ul>
                {
                    data && data.map((item, index) => {
                        return (
                            <li key={index}>  Name: {item.name} Email: {item.email} </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Fetch1