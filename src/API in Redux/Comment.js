import React from 'react'
import { useDispatch } from "react-redux"
import { fetchComments } from './ApiSlice';
const Comment = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Comment</h1>
            <button onClick={() => {
                dispatch(fetchComments())
            }}>get Comments</button>
        </div>
    )
}

export default Comment