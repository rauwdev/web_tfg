'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("alerts", "type", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "real"
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn("alerts", "type")
  }
};
