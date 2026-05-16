import "./LoginForm.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import { me as fetchMe, login as loginService } from "../../services/AuthService"


export default function LoginForm() {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isAuth, login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await loginService(email, password)
            const userData = await fetchMe()
            login(userData)
            navigate("/")
        } catch (err) {
            setError("Email o contraseña incorrectos.")
        }
    }

    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    })

    return (
        <div className="login-page">
            <section className="login-card">
                <h1>Safe On Route</h1>
                <p className="login-subtitle">Inicia sesión en tu cuenta</p>
                {error && <p className="login-error">{error}</p>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="tu@email.com"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contrasena</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <button className="login-btn">Iniciar sesion</button>
                </form>
            </section>
        </div>
    )
}