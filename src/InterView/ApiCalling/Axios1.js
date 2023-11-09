import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
const Axios1 = () => {
    const [res, setRes] = useState("")
    console.log(res);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .then((res) => setRes(res))
    }, [])
    return (
        <div><h1>Axios1</h1>
            <ul>
                {res && res.map((item, index) => {
                    return (
                        <li key={index}> Name:{item.name} , Email: {item.email}  </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Axios1