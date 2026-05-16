import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageTransition from "../components/PageTransition/PageTransition"
import Login from "../pages/Login/Login"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Home from "../pages/Home/Home"
import Dashboard from "../pages/Dashboard/Dashboard"
import AboutUs from "../pages/AboutUs/AboutUs"
import Technology from "../pages/Technology/Technology"
import Demo from "../pages/Demo/Demo"
import Documentation from "../pages/Documentation/Documentation"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <PageTransition>
                <Routes>
                    <Route path="/login" element={ <Login /> }/>
                    <Route element={ <MainLayout /> } >
                        <Route path="/" element={ <Home /> }></Route>
                        <Route path="/dashboard" element={ <Dashboard /> }></Route>
                        <Route path="/technology" element={ <Technology /> }></Route>
                        <Route path="/about-us" element={ <AboutUs /> }></Route>
                        <Route path="/demo" element={ <Demo /> }></Route>
                        <Route path="/documentation" element={ <Documentation /> }></Route>
                    </Route>
                </Routes>
            </PageTransition>
        </BrowserRouter>
    )
}