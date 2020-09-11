'use strict';

const { INTEGER } = require("sequelize/types");
const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      courseName: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      par: {
        type: Sequelize.INTEGER,
      },
      // tee: {
      //   type: Sequelize.STRING,
      // },
      // yardage: {
      //   type: Sequelize.INTEGER,
      // },
      // rating: {
      //   type: Sequelize.INTEGER,
      // },
      // slope: {
      //   type: Sequelize.INTEGER,
      // },
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
    await queryInterface.dropTable('Courses');
  }
};