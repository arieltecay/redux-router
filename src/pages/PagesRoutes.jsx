import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import Counter from "./Counter"
import Home from "./Home"
import NotFound from "./NotFound"

const PagesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="*" element={<NotFound />} />

                <Route path='/' element={<Navigate to="/felicitaciones" />} />
            </Routes>
        </>
    )
}

export default PagesRoutes