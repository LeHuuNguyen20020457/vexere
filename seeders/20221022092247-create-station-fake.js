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
     return queryInterface.bulkInsert('Stations', [
      {
      name: 'Bến Xe Miền Tây Kinh Dương Vương',
      address: '395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh',
      province: ' Hồ Chí Minh',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Bến Xe Mỹ Đình',
      address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội',
      province: 'Hà Nội',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Bến Xe Khách Triệu Sơn',
      address: '57Tô Vĩnh Diện, Minh Dân, Triệu Sơn, Thanh Hoá',
      province: 'Thanh Hoa',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('Stations', null, {});
  }
};
