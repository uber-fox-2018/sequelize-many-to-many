'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Teachers','subjectId',{
        type: Sequelize.INTEGER
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Teachers','subjectId',{
      type: Sequelize.INTEGER
    })
  }
};
