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
     return await queryInterface.bulkInsert('Tickets', [
       {
         tripID: 1,
         userID: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        tripID: 3,
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tripID: 3,
        userID: 1,
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

    return await queryInterface.bulkDelete('Tickets', null, {});
  }
};
