import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"

export default function ProtectedRoute() {
    const { isAuth, loading } = useAuth()

    if (loading) return null

    if (!isAuth) return <Navigate to="/login" replace />

    return <Outlet />
}