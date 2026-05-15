const UserSequelizeRepository = require("../adapters/out/persistence/userSequelizeRepository")

const Register = require("../../application/useCases/register")
const Login = require("../../application/useCases/login")

const userRepository = new UserSequelizeRepository()

const register = new Register(userRepository)
const login = new Login(userRepository)

module.exports = {
    userRepository,
    register,
    login
}