import { createSlice } from "@reduxjs/toolkit"
const CounterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
    },
    reducers: {
        add: (state, payload) => { state.count = state.count + 1 },
        Sub: (state, payload) => { state.count = state.count - 1 },
        mul: (state, payload) => { state.count = state.count * 10 },
    }
})
export const { add, Sub, mul } = CounterSlice.actions
export default CounterSlice.reducer