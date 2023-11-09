import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RemoveItem } from "./AddToCart"
const Carts = () => {
    const cartsdata = useSelector((state) => state.Cart.cart)
    const dispatch = useDispatch();
    console.log(cartsdata);
    return (
        <div>Carts

            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center" }}>
                {
                    cartsdata.map((ele, index) => {
                        return (

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3> {ele.title} </h3>
                                <img src={ele.image} alt='nahi mila' height={100} width={100} />
                                <button onClick={() => {
                                    dispatch(RemoveItem({ id: ele.id }))
                                }}>Remove to Card</button>
                            </div>



                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carts
