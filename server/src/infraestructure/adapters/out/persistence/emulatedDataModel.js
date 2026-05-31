const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/db")

const EmulatedDataModel = sequelize.define("emulated_data", {
    emulatedDataId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    seatbeltDriver: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    seatbeltCopilot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    seatbeltRearLeft: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    seatbeltRearRight: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    driverSeat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    copilotSeat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    rearLeftSeat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    rearRightSeat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    driverSeatKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    copilotSeatKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    rearLeftSeatKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    rearRightSeatKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactFrontLeft: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactFrontCenter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactFrontRight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactLeftSideFront: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactLeftSideCenter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactLeftSideRear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRightSideFront: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRightSideCenter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRightSideRear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRearLeft: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRearCenter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    impactRearRight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    brake: {
        type: DataTypes.INTEGER,
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
    gyroZ: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    vehicle: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: "emulated_data"
})

module.exports = EmulatedDataModel