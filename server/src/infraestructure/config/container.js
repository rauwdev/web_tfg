const UserSequelizeRepository = require("../adapters/out/persistence/userSequelizeRepository")
const EmulatedDataSequelizeRepository = require("../adapters/out/persistence/emulatedDataSequelizeRepository")
const VehiclesSequelizeRepository = require("../adapters/out/persistence/vehiclesSequelizeRepository")
const AlertsSequelizeRepository = require("../adapters/out/persistence/alertsSequelizeRepository")

const Token = require("../../infraestructure/services/token")
const Password = require("../../infraestructure/services/password")

const Register = require("../../application/useCases/register")
const Login = require("../../application/useCases/login")
const CreateEmulatedData = require("../../application/useCases/createEmulatedData")
const CreateVehicle = require("../../application/useCases/createVehicle")
const GetAllVehicles = require("../../application/useCases/getAllVehicles")
const GetAllAlerts = require("../../application/useCases/getAllAlerts")
const GetLatestAlerts = require("../../application/useCases/getLatestAlerts")
const GetCurrentUser = require("../../application/useCases/getCurrentUser")
const ImpactAnalysisService = require("../../domain/services/impactAnalysisService")
const DeleteVehicle = require("../../application/useCases/deleteVehicle")
const FindAllByRole = require("../../application/useCases/findAllByRole")

const userRepository = new UserSequelizeRepository()
const emulatedDataRepository = new EmulatedDataSequelizeRepository()
const vehicleRepository = new VehiclesSequelizeRepository()
const alertsRepository = new AlertsSequelizeRepository()

const impactAnalysisService = new ImpactAnalysisService()

const register = new Register(userRepository, Password)
const login = new Login(userRepository, Password, Token)
const createEmulatedData = new CreateEmulatedData(emulatedDataRepository, alertsRepository, impactAnalysisService)
const createVehicle = new CreateVehicle(vehicleRepository)
const getAllVehicles = new GetAllVehicles(vehicleRepository)
const getAllAlerts = new GetAllAlerts(alertsRepository)
const getLatestAlerts = new GetLatestAlerts(alertsRepository)
const getCurrentUser = new GetCurrentUser(userRepository)
const deleteVehicle = new DeleteVehicle(vehicleRepository)
const findAllByRole =  new FindAllByRole(userRepository)

module.exports = {
    register,
    createEmulatedData,
    createVehicle,
    getAllVehicles,
    getAllAlerts,
    getLatestAlerts,
    getCurrentUser,
    deleteVehicle,
    findAllByRole,
    login
}