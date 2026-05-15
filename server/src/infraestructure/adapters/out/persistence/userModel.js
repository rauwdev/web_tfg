const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/db")

const UserModel = sequelize.define("user", {
    userId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(15),
        allowNull: true
    }
}, {
    tableName: "user"
})

module.exports = UserModel