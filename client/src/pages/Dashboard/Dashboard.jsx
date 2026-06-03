import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthProvider"
import "./Dashboard.css"
import Insights from "../../components/Dashboard/Insights"
import VehiclesGrid from "../../components/Dashboard/VehiclesGrid"
import CrashNotification from "../../components/CrashNotification/CrashNotification"

export default function Dashboard() {
    const { user, loading } = useAuth()
    const [mode, setMode] = useState("emulated")
    const isAdmin = user?.role === "admin"
    const isProf = user?.role === "professional"
    const isClient = user?.role === "client"
    const isRealMode = mode === "real"
    const isEmulatedMode = mode === "emulated"

    useEffect(() => {
        
    })

    return (
        <>
            {isAdmin ? (
                isEmulatedMode ? (
                    <>
                        <Insights
                            mode = {mode}
                            setMode = {setMode}
                        />
                        <VehiclesGrid
                            mode = {mode}
                            setMode = {setMode}
                        />
                        <CrashNotification />
                    </>
                ) : (
                    isRealMode ? (
                        <>
                            <Insights
                                mode = {mode}
                                setMode = {setMode}
                            />
                            <VehiclesGrid
                                mode = {mode}
                                setMode = {setMode}
                            />  
                            <CrashNotification />
                        </>
                    ) : (
                        <></>
                    )
                )
                
            ) : (
                isProf ? (
                    isEmulatedMode ? (
                        <>
                            <Insights
                                mode = {mode}
                                setMode = {setMode}
                            />
                            <VehiclesGrid
                                mode = {mode}
                                setMode = {setMode}
                            />
                            <CrashNotification />
                        </>
                    ) : (
                        isRealMode ? (
                            <>
                                <Insights
                                    mode = {mode}
                                    setMode = {setMode}
                                />
                                <VehiclesGrid
                                    mode = {mode}
                                    setMode = {setMode}
                                />  
                                <CrashNotification />
                            </>
                        ) : (
                            <></>
                        )
                    )
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