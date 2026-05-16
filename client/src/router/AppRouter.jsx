import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageTransition from "../components/PageTransition/PageTransition"
import Login from "../pages/Login/Login"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Home from "../pages/Home/Home"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <PageTransition>
                <Routes>
                    <Route path="/login" element={ <Login /> }/>
                    <Route element={ <MainLayout /> } >
                        <Route path="/" element={ <Home /> }></Route>
                    </Route>
                </Routes>
            </PageTransition>
        </BrowserRouter>
    )
}