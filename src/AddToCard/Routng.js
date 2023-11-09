import React from 'react'
import Home from './Home'
import Carts from './Carts'
import { Routes, Route } from "react-router-dom"
const Routng = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Carts />} />
            </Routes>
        </div>
    )
}

export default Routng