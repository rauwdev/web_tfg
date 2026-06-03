import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "../components/Misc/ProtectedRoute/ProtectedRoute"
import PageTransition from "../components/Misc/PageTransition/PageTransition"
import Login from "../pages/Login/Login"
import MainLayout from "../layouts/MainLayout/MainLayout"
import NoFooterLayout from "../layouts/NoFooterLayout/NoFooterLayout"
import LandingPage from "../pages/LandingPage/LandingPage"
import Dashboard from "../pages/Dashboard/Dashboard"
import AboutUs from "../pages/AboutUs/AboutUs"
import Technology from "../pages/Technology/Technology"
import Demo from "../pages/Demo/Demo"
import Documentation from "../pages/Documentation/Documentation"
import Log from "../pages/Log/Log"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <PageTransition>
                <Routes>
                    <Route path="/login" element={ <Login /> }/>
                    <Route element={ <NoFooterLayout /> } >
                        <Route element={ <ProtectedRoute /> }>
                            <Route path="/dashboard" element={ <Dashboard /> }></Route>
                            <Route path="/logs" element={ <Log /> }></Route>
                        </Route>
                    </Route>
                    <Route element={ <MainLayout /> } >
                        <Route path="/" element={ <LandingPage /> }></Route>
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