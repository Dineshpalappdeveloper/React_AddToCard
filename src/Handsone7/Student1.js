import React from 'react'
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
const Student1 = () => {

    const data1 = useSelector((state) => state.Student)
    const nav = useNavigate();
    console.log(data1);
    return (

        <div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h1>Student Details</h1>
                <Link to="/add">
                    Add New Student
                </Link>
            </div>
            {
                data1.map((item, index) => {
                    return (
                        <div key={index} style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <h1>{item.Name}</h1>
                            <h1>{item.Batch}</h1>
                            <h1>{item.Course}</h1>
                            <button onClick={() => {
                                nav("/edit", { state: item.id })
                            }}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Student1