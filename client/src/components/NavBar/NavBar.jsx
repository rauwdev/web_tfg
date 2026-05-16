import "./NavBar.css"
import logo from "../../assets/logo.svg"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import { logout as logoutService } from "../../services/AuthService"

export default function NavBar() {
    const { isAuth, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        logoutService()
        logout()
        navigate("/")    
    }

    return (
        <header className="nav-header">
            <nav className="nav-dashboard">
                <NavLink to="/" className="nav-marca">
                    <img src={logo} alt="" />
                    <p>Safe On Route</p>
                </NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/platform">Dashboard</NavLink></li>
                    <li><NavLink to="/technology">Tecnología</NavLink></li>
                    <li><NavLink to="/specs">Sobre nosotros</NavLink></li>
                </ul>
                <div className="nav-actions">
                    {isAuth ? (
                        <>
                            <NavLink onClick={handleLogout} className="nav-signin">Logout</NavLink>    
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-signin">Sign in</NavLink>    
                        </>
                    )}
                    <NavLink to="/demo" className="nav-cta">Reserva una demo</NavLink>
                </div>
            </nav>
        </header>
    )
}