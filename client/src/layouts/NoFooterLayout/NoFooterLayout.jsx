import "../MainLayout/MainLayout.css"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

export default function NoFooterLayout() {
    return (
        <>
            <NavBar />
            <div className="layout">
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </>
    )
}