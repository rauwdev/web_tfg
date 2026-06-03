const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/db")

const AlertModel = sequelize.define("alert", {
    alertId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    crash: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    vehicle: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    zone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    severity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "real"
    }
}, {
    tableName: "alerts",
    timestamps: true,
    updatedAt: false
})

module.exports = AlertModel