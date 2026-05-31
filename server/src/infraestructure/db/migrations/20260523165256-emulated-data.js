'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("emulated_data", {
      emulatedDataId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      seatbeltDriver: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      seatbeltCopilot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      seatbeltRearLeft: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      seatbeltRearRight: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      driverSeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      copilotSeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      rearLeftSeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      rearRightSeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      driverSeatKg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      copilotSeatKg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      rearLeftSeatKg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      rearRightSeatKg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactFrontLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactFrontCenter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactFrontRight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactLeftSideFront: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactLeftSideCenter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactLeftSideRear: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRightSideFront: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRightSideCenter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRightSideRear: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRearLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRearCenter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impactRearRight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      brake: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      accelX: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      accelY: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      accelZ: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      gyroX: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      gyroY: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      gyroZ: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("emulated_data")
  }
};