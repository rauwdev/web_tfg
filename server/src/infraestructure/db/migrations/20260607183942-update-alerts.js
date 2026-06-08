'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("alerts", "alerts_ibfk_1")
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("alerts", {
      fields: ["crash"],
      type: "foreign key",
      name: "alerts_ibfk_1",
      references: {
        table: "emulated_data",
        field: "emulatedDataID"
      }
    })
  }
};
