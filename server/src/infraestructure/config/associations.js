const AlertModel = require("../adapters/out/persistence/alertsModel")
const UserModel = require("../adapters/out/persistence/userModel")
const VehiclesModel = require("../adapters/out/persistence/vehiclesModel")
const RealDataModel = require("../adapters/out/persistence/realDataModel")
const EmulatedDataModel = require("../adapters/out/persistence/emulatedDataModel")

VehiclesModel.belongsTo(UserModel, { foreignKey: "owner", as: "ownerData" })
VehiclesModel.hasMany(AlertModel, { foreignKey: "vehicle", as: "alertData" })

AlertModel.belongsTo(VehiclesModel, { foreignKey: "vehicle", as: "vehicleData" })

RealDataModel.belongsTo(VehiclesModel, { foreignKey: "vehicle", as: "vehicleData" })
VehiclesModel.hasMany(RealDataModel, { foreignKey: "vehicle", as: "realData" })

EmulatedDataModel.belongsTo(VehiclesModel, { foreignKey: "vehicle", as: "vehicleData" })
VehiclesModel.hasMany(EmulatedDataModel, { foreignKey: "vehicle", as: "emulatedData" })