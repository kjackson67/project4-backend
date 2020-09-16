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
      {
        courseName: "Waverly Golf Course",
        location: "Waverly, IA",
        par: 70,
        tee: "White",
        yardage: 5602,
        rating: 67.0,
        slope: 108, 
      },
      {
        courseName: "Fillmore Fairways",
        location: "Cascade, IA",
        par: 36,
        tee: "Back",
        yardage: 3195,
        rating: 35.1,
        slope: 114,
      },
      {
        courseName: "Beaver Dam CC",
        location: "Beaver Dam, WI",
        par: 72,
        tee: "Gold",
        yardage: 5222,
        rating: 65.9,
        slope: 110,
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
