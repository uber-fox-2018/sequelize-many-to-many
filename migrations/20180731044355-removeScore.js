'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('Students','score',{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students','score',{
      type : Sequelize.INTEGER
    })
  }
};
