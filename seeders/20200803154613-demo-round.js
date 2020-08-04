'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rounds',
    [
      {
        name: "Korby Jackson",
        courseName: "TPC Deere Run",
        userId: 1,
        // date: new Date(2020,07,03),
        date: "2020-08-03",
        score: 90,
      },
    ],
    {}
    );
  },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
