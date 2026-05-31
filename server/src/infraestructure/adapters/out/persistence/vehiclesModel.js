const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/db")

const VehiclesModel = sequelize.define("vehicles", {
    vehicleId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    owner: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    plate: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: "vehicles",
    timestamps: false,
})

module.exports = VehiclesModel