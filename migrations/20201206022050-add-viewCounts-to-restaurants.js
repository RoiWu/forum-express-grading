'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Restaurants', 'viewCounts', {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Restaurants', 'viewCounts');
  }
};
