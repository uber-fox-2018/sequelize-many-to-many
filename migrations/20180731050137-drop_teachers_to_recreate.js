'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teachers')
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
