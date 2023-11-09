import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { EditedStudent } from "./StudentSlice";
const Edit = () => {
    const nav = useNavigate();
    const dispatch = useDispatch()
    const data = useLocation().state;
    console.log(data);
    const stdId = useSelector((state) => state.Student.filter((item) => item.id === data));
    const { Name, Batch, Course } = stdId[0];
    console.log(stdId);

    const [newName, setName] = useState(Name);
    const [newBatch, setBatch] = useState(Batch);
    const [newCourse, setCourse] = useState(Course);

    function HandleClick(e) {
        e.preventDefault();
        dispatch(EditedStudent({
            id: stdId,
            newName,
            newBatch,
            newCourse
        }))
        nav("/student")
    }
    return (

        <form action="" onSubmit={HandleClick}>
            <h1>Edit</h1>
            <label>Name</label>
            <input type="text" value={newName} name="Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Batch</label>
            <input type="text" value={newBatch} name="Batch" onChange={(e) => setBatch(e.target.value)} />
            <br />
            <label>Course</label>
            <input type="text" value={newCourse} name="Course" onChange={(e) => setCourse(e.target.value)} />
            <br />
            <input type="submit" value="Upadate" onClick={HandleClick} />
            <button type="button" onClick={() => nav("/student")} >Cancel</button>
        </form>
    )
}

export default Edit