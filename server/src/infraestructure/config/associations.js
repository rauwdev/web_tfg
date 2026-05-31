const AlertModel = require("../adapters/out/persistence/alertsModel");
const UserModel = require("../adapters/out/persistence/userModel");
const VehiclesModel = require("../adapters/out/persistence/vehiclesModel");

VehiclesModel.belongsTo(UserModel, { foreignKey: "owner", as: "ownerData" })
VehiclesModel.hasMany(AlertModel, { foreignKey: "vehicle", as: "alertData" })

AlertModel.belongsTo(VehiclesModel, { foreignKey: "vehicle", as: "vehicleData" })