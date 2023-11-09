import { createSlice } from "@reduxjs/toolkit";

const AddtoCart = createSlice({
    name: "Cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        RemoveItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }
    }
})
export const { addToCart, RemoveItem } = AddtoCart.actions
export default AddtoCart.reducer