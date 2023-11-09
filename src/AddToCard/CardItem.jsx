import React from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from './AddToCart';


const CardItem = ({id,title,image,show}) => {
  const dispatch = useDispatch();
  return (
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>{title}</h1>
        <img src={image} alt="product" height={180} width={150} id={id} />
        <button onClick={()=>{
        dispatch(addToCart({
          id,image,title
        }))
        }} >Add To Card</button>
    </div>
  )
}

export default CardItem