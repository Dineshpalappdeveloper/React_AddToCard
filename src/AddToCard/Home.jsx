import React from 'react'
import logo from "./final.png"
import computer from "./ic_developer.png"
import computer1 from "./bussiness-man.png"
import compute2 from "./hellaaao.jpg"
import computer3 from "./ic_about.png"
import computer4 from "./iiiback.jpg"
import CardItem from './CardItem'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Home = () => {
    const item = useSelector((state)=> state.Cart.cart);
    console.log(item);
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: "100%" }}>
                <div>
                    <img src={logo} alt="logo" height={100} width={120} />

                </div>
                <Link to="/cart">
                <h1>Count : {item.length} </h1>
                </Link>
            </div>

                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <CardItem  title={"Cumputer"} id={"1"} image={computer} />
                    <CardItem  title={"Cort"} id={"2"} image={computer1} />
                    <CardItem  title={"Super Coumputer"} id={"3"} image={compute2} />
                    <CardItem  title={"Information"} id={"4"} image={computer3} />
                    <CardItem  title={"Bumb"} id={"5"} image={computer4} />
                </div>



        </div>

    )
}

export default Home