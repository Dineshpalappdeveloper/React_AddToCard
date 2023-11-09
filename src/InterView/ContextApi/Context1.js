import React from 'react'
import { useContext } from 'react'
import StoreContext from './StoreContext'

const Context1 = () => {
    const data = useContext(StoreContext)
    console.log(data);
    return (
        <div>
            <h1>Context1 : {data && data.map((data1) => {
                return (
                    <li>Name: {data1.name}Email: {data1.email} </li>
                )
            })} </h1>

        </div>
    )
}

export default Context1