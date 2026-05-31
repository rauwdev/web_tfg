'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("alerts", {
      alertId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      crash: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: "emulated_data", key: "emulatedDataId" }
      },
      vehicle: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: "vehicles", key: "vehicleId" }
      },
      zone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      severity: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("alerts")
  }
};
