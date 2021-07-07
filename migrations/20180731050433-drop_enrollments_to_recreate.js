'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments')
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
