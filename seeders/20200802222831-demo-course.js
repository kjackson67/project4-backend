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
          img: "https://tpc.com/deererun/wp-content/uploads/sites/44/2016/07/Hero_Deere-Run-hole-16-Compressed.jpg",
          userId: 1,
        },
        {
          name: "Glynns Creek",
          location: "Scott County Park, IA",
          par: 72,
          img: "https://www.google.com/search?q=glynns+creek+golf+course+images&safe=active&sxsrf=ALeKk016UXtiwb0nGIB3an0if3JQnJJpZA:1596430193775&tbm=isch&source=iu&ictx=1&fir=Z6y2n4cy6rO9sM%252CeSYX7nZclyCOtM%252C_&vet=1&usg=AI4_-kTdCCexZSbXtZ2Tl6ztfHLtl0FX5Q&sa=X&ved=2ahUKEwj95O70nf7qAhUNTKwKHRVKC_QQ9QEwCHoECAoQIA#imgrc=Z6y2n4cy6rO9sM",
          userId: 2,
        },
        {
          name: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
          img: "http://palmerhillsgolf.com/wp-content/uploads/2016/03/1375208_10151749520047144_541604284_n.jpg",
          userId: 3,
        },
        {
          name: "Golfmohr",
          location: "East Moline",
          par: 72,
          img: "https://www.golfmohr.com/images/slideshow/slide1.jpg",
          userId: 4,
        },
      ], {});
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
