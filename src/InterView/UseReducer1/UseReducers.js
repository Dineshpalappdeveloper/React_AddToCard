import React from 'react'
import { useReducer } from 'react'

const UseReducers = () => {
    const initialState = 0;
    const reducer = (state, actions) => {
        switch (actions) {
            case "Increment":
                return state + 1
            case "Decrement":
                return state - 1

        }
    }
    const [data, setData] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>UseReducers</h1>
            <h2>Counter : {data}</h2>
            <button onClick={() => setData("Increment")} >Increment</button>
            <button onClick={() => setData("Decrement")} >Decrement</button>
        </div>
    )
}

export default UseReducers