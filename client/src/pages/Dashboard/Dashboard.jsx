import { useEffect } from "react"
import { useAuth } from "../../context/AuthProvider"
import "./Dashboard.css"
import Insights from "../../components/Dashboard/Insights"
import VehiclesGrid from "../../components/Dashboard/VehiclesGrid"
import CrashNotification from "../../components/CrashNotification/CrashNotification"

export default function Dashboard() {
    const { user, loading } = useAuth()
    const isAdmin = user?.role === "admin"
    const isProf = user?.role === "professional"
    const isClient = user?.role === "client"

    useEffect(() => {
        
    })

    return (
        <>
            {isAdmin ? (
                <>
                    <Insights />
                    <VehiclesGrid />
                    <CrashNotification />
                </>
            ) : (
                isProf ? (
                    <>
                        <Insights />
                        <VehiclesGrid />
                        <CrashNotification />
                    </>
                ) : (
                    isClient ? (
                        <>
                        
                        </>
                    ) : (
                        <>
                        
                        </>
                    )
                )
            )}

        </>
    )
}