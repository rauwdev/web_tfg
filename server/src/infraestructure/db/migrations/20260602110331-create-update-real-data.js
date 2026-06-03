'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("realData", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn("realData", "createdAt")
  }
};