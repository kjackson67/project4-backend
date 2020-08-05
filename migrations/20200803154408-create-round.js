'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      courseName: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rounds');
  }
};