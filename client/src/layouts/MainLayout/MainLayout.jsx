import "./MainLayout.css"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/Misc/NavBar/NavBar"
import Footer from "../../components/Misc/Footer/Footer"

export default function MainLayout() {
    return (
        <>
            <NavBar />
            <div className="layout">
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}