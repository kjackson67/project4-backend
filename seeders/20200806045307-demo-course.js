'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Courses",
      [
        {                           
          courseName: "TPC Deere Run",
          location: "Silvis, IL",
          par: 72,
          tee: "Blue/White", 
          yardage: 6269,
          rating: 71.2,
          slope: 133,
      },
      {
          courseName: "Glynns Creek",
          location: "Scott County Park, IA",
          par: 72,          
      },
      {
          courseName: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
      },
      {
          courseName: "Golfmohr",
          location: "East Moline",
          par: 72,
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
