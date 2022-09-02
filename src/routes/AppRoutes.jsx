import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import PagesRoutes from '../pages/PagesRoutes';


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PagesRoutes />} />
                
            </Routes>
        </>
    )
}

export default AppRoutes