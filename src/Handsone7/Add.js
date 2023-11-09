import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AddStudent } from "./StudentSlice";
const Add = () => {
    const [Name, setName] = useState("");
    const [Batch, setBatch] = useState("");
    const [Course, setCourse] = useState("");
    const nav = useNavigate();
    const dispatch = useDispatch()
    const dataAll = useSelector((state) => state.Student)
    function HandleClick(e) {
        e.preventDefault();
        dispatch(AddStudent({
            id: dataAll.length + 1,
            Name, Course
            , Batch
        }))
        nav("/student")
        // console.log(name);
    }
    return (
        <div>
            <h1>Add</h1>

            <form action="" onSubmit={HandleClick}>
                <label>Name</label>
                <input type="text" value={Name} name="Name" onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Batch</label>
                <input type="text" value={Batch} name="Batch" onChange={(e) => setBatch(e.target.value)} />
                <br />
                <label>Course</label>
                <input type="text" value={Course} name="Course" onChange={(e) => setCourse(e.target.value)} />
                <br />
                <input type="submit" value="submit" />
                <button type="button" onClick={() => nav("/student")} >Cancel</button>
            </form>
        </div>
    );
};

export default Add;
