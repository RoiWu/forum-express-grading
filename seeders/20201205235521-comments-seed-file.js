'use strict';
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryInterface.bulkInsert('Comments',
      Array.from({ length: 50 }).map((d, i) =>
        ({
          id: (i - 1) * 10 + 1,
          text: faker.lorem.text().substring(0, 20),
          UserId: Math.floor(Math.random() * 3) * 10 + 1,
          RestaurantId: Math.floor(Math.random() * 50) * 10 + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      ), {})
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryInterface.bulkDelete('Comments', null, {})
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  }
};
