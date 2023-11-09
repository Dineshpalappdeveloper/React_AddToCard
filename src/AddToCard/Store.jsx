import ApiSlice from "../API in Redux/ApiSlice";
import StudentSlice from "../Handsone7/StudentSlice";
import AddToCart from "./AddToCart";
import {configureStore} from "@reduxjs/toolkit"
export default configureStore({
reducer:{
    Cart : AddToCart,
    Student:StudentSlice,
    Comments:ApiSlice

}
})