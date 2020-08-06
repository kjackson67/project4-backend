'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Courses",
      [
        {                           
          name: "TPC Deere Run",
          location: "Silvis, IL",
          par: 72,
          courseId: 1,
      },
      {
          name: "Glynns Creek",
          location: "Scott County Park, IA",
          par: 72,
          courseId: 2,
      },
      {
          name: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
          CourseId: 3,
      },
      {
          name: "Golfmohr",
          location: "East Moline",
          par: 72,
          courseId: 4,
        },
  ], {});
},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
