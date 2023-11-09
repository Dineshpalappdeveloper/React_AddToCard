import { createSlice } from "@reduxjs/toolkit"
import Data from "./Data"
const StudentSlice = createSlice({
    name: "Student",
    initialState: Data,
    reducers: {
        AddStudent: (state, action) => {
            state.push(action.payload)
        },
        EditedStudent: (state, action) => {
            const { id, newName, newBatch, newCourse } = action.payload;
            const exitingStudent = state.find((student) => student.id === id);
            exitingStudent.Name = newName;
            exitingStudent.Batch = newBatch;
            exitingStudent.Course = newCourse;

        }
    }
})
export default StudentSlice.reducer
export const { AddStudent, EditedStudent, exitingStudent } = StudentSlice.actions