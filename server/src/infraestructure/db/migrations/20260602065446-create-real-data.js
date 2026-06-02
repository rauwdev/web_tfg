'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realData", {
      realDataId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      Raw: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      Pct: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      PctFiltered: {
        type: Sequelize.FLOAT,
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
      impact: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      seatbelt: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      seat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("realData")
  }
};