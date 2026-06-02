'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("realData", "vehicle", {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: { model: "vehicles", key: "vehicleId" }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn("realData", "vehicle")
  }
};