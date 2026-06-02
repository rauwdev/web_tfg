const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/db")

const RealDataModel = sequelize.define("realData", {
    realDataId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    raw: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    pct: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    pctFiltered: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    accelX: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    accelY: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    accelZ: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    gyroX: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    gyroY: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    impact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    seatbelt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    seat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    vehicle: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: "realData",
    timestamps: false
})

module.exports = RealDataModel