import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx"
import Diary from '../Pages/Diary.jsx';
const AllRoutes = () => {
    return (
        <Routes>
               <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/d" element={<Diary />} />
        </Routes>
    )
}

export default AllRoutes
