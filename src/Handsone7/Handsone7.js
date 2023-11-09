import React from 'react'
import { NavLink, Routes, Route } from "react-router-dom"
import Home1 from './Home1'
import ContactUs1 from './ContactUs1'
import Student1 from './Student1'
import Edit from './Edit'
import Add from './Add'
// import Data from './Data'
const Handsone7 = () => {
    return (
        <div>
            <h2>
                Handsone7
            </h2>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">ContactUs1</NavLink>
            <NavLink to="/student">Student</NavLink>
            <Routes>
                <Route path='/' element={<Home1 />} />
                <Route path='/contact' element={<ContactUs1 />} />
                <Route path='/student' element={<Student1 />} />
                <Route path='/edit' element={<Edit />} />
                <Route path='/add' element={<Add />} />
            </Routes>

        </div>
    )
}

export default Handsone7