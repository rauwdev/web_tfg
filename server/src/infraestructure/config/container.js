const UserSequelizeRepository = require("../adapters/out/persistence/userSequelizeRepository")
const EmulatedDataSequelizeRepository = require("../adapters/out/persistence/emulatedDataSequelizeRepository")
const VehiclesSequelizeRepository = require("../adapters/out/persistence/vehiclesSequelizeRepository")
const AlertsSequelizeRepository = require("../adapters/out/persistence/alertsSequelizeRepository")
const RealDataSequelizeRepository = require("../adapters/out/persistence/realDataSequelizeRepository")

const Token = require("../../infraestructure/services/token")
const Password = require("../../infraestructure/services/password")

const Register = require("../../application/useCases/user/register")
const Login = require("../../application/useCases/user/login")
const CreateEmulatedData = require("../../application/useCases/emulatedData/createEmulatedData")
const CreateVehicle = require("../../application/useCases/vehicle/createVehicle")
const GetAllVehicles = require("../../application/useCases/vehicle/getAllVehicles")
const GetAllAlerts = require("../../application/useCases/alerts/getAllAlerts")
const GetLatestAlerts = require("../../application/useCases/alerts/getLatestAlerts")
const GetCurrentUser = require("../../application/useCases/user/getCurrentUser")
const ImpactAnalysisService = require("../../domain/services/impactAnalysisService")
const DeleteVehicle = require("../../application/useCases/vehicle/deleteVehicle")
const FindAllByRole = require("../../application/useCases/user/findAllByRole")
const CreateRealData = require("../../application/useCases/realData/createRealData")

const userRepository = new UserSequelizeRepository()
const emulatedDataRepository = new EmulatedDataSequelizeRepository()
const vehicleRepository = new VehiclesSequelizeRepository()
const alertsRepository = new AlertsSequelizeRepository()
const realDataRepository = new RealDataSequelizeRepository()

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
const createRealData = new CreateRealData(realDataRepository)

module.exports = {
    register,
    createEmulatedData,
    createRealData,
    createVehicle,
    getAllVehicles,
    getAllAlerts,
    getLatestAlerts,
    getCurrentUser,
    deleteVehicle,
    findAllByRole,
    login
}