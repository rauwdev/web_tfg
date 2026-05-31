'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("vehicles", {
      vehicleId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      owner: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: "user", key: "userId" }
      },
      plate: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("vehicles")
  }
};
