'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('StudentSubjects', 'Score', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('StudentSubjects', 'Score', {});
  }
};