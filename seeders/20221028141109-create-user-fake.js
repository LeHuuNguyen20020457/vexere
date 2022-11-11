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
    return await queryInterface.bulkInsert('users', [
       {
        name: "John Doe",
        email: "nguyen@gmail.com",
        password: '$2a$10$5LDSy0FQAjKjJ1qHVRU7iu5AdA6nWvQf4lT4A0TQqgGNffkxz87My',
        numberPhone: "0976339300",
        avatar: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2020/12/03/1nwiskz8_23_296_168.webp",
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hao hao",
        email: "haohao@gmail.com",
        password: '$2a$10$5LDSy0FQAjKjJ1qHVRU7iu5AdA6nWvQf4lT4A0TQqgGNffkxz87My',
        numberPhone: "0976339300",
        avatar: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2020/12/03/1nwiskz8_23_296_168.webp",
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "luu ly",
        email: "luuly@gmail.com",
        password: '$2a$10$5LDSy0FQAjKjJ1qHVRU7iu5AdA6nWvQf4lT4A0TQqgGNffkxz87My',
        numberPhone: "0976339300",
        avatar: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2020/12/03/1nwiskz8_23_296_168.webp",
        type: 'Admin',
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
    return await queryInterface.bulkDelete('users', null, {});
  }
};
