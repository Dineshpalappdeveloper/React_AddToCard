import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice"
const Store = configureStore({
    reducer: {
        Counter: CounterSlice
    }
})
export default Store