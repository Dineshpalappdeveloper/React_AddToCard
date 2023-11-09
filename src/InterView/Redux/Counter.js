import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Sub, add, mul } from './CounterSlice';
const Counter = () => {
    const data = useSelector((state) => state.Counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter : {data} </h2>
            <button onClick={() => { dispatch(add()) }} >Increment</button>
            <button onClick={() => { dispatch(Sub()) }} >Decrement</button>
            <button onClick={() => { dispatch(mul()) }} >Multiplication</button>
        </div>
    )
}

export default Counter