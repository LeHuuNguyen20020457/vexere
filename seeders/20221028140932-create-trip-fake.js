'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return await queryInterface.bulkInsert('Trips', [
       {
          fromStationID: 1,
          toStationID: 2,
          startTime: new Date(),
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
       },
       {
        fromStationID: 2,
        toStationID: 3,
        startTime: new Date(),
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      fromStationID: 3,
      toStationID: 2,
      startTime: new Date(),
      price: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
     ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Trips', null, {});
  }
};
