import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react-dom/test-utils";
export const fetchComments = createAsyncThunk('fetchComments', () => {
    const response = axios.get("https://jsonplaceholder.typicode.com/comments/")
        .then((response) => response.data)
    return response;
})
const ApiSlice = createSlice({
    name: "Comments",
    initialState: {
        data: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.isError = true;
            console.log(action.payload)
        })
    }
})
export default ApiSlice.reducer