import React from 'react'
import { useSelector } from "react-redux"
const CommentsList = () => {
    const data = useSelector(state => state.Comments.data);
    const Comments = useSelector(state => state.Comments);

    console.log(data);
    return (
        <div>
            <h1>CommentsList</h1>
            {Comments.isLoading ? <h1>Loading ......</h1> :


                data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>
                                Name: {item.name} <br />
                                Email: {item.email} <br />
                                Body:{item.body}
                            </h2>
                            <h3 style={{ backgroundColor: "aqua" }}>New Comments UpCommmings</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentsList