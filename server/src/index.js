require("dotenv").config()
const app = require("./infraestructure/adapters/in/http/server")
const sequelize = require("./infraestructure/config/db")
require("./infraestructure/config/associations")

const PORT = process.env.PORT

sequelize.authenticate()
    .then(() => {
        console.log("Conectado a la database")
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://13.36.174.103:${PORT}`)
        })
    })
    .catch(err => {
        console.error("Error al conectar con la base de datos", err)
        process.exit(1)
    })