'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("vehicles", "manufacturer", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "N/A"
    }),
    await queryInterface.addColumn("vehicles", "model", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "N/A"
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("vehicles", "manufacturer"),
    await queryInterface.removeColumn("vehicles", "model")
  }
};
