import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthProvider"
import "./Dashboard.css"
import Insights from "../../components/Dashboard/Insights"
import VehiclesGrid from "../../components/Dashboard/VehiclesGrid"
import CrashNotification from "../../components/CrashNotification/CrashNotification"
import DemoFaq from "../../components/Demo/DemoFaq/DemoFaq"
import DemoForm from "../../components/Demo/DemoForm/DemoForm"
import DemoHero from "../../components/Demo/DemoHero/DemoHero"

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
                            <DemoHero />
                            <DemoForm />
                            <DemoFaq />
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