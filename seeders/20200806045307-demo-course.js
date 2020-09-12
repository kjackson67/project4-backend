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
          tee: "White", 
          yardage: 6353,
          rating: 70.2,
          slope: 117, 
      },
      {
          courseName: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
          tee: "White",
          yardage: 5504,
          rating: 68.2,
          slope: 121,
      },
      {
          courseName: "Golfmohr",
          location: "East Moline",
          par: 72,
          tee: "White",
          yardage: 6394,
          rating: 70.2,
          slope: 118,
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
