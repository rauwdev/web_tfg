'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("emulated_data", "vehicle", {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: { model: "vehicles", key: "vehicleId" }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn("emulated_data", "vehicle")
  }
};
