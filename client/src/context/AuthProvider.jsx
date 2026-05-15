import { createContext, useContext, useState, useEffect } from "react";
import { me } from "../services/AuthService"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function restoreSession() {
            try {
                const data = await me()
                setUser(data)
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        restoreSession()
    }, [])

    const login = (data) => {
        setUser(data)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value ={ { user, login, loading, logout, isAuth: !!user } }>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}