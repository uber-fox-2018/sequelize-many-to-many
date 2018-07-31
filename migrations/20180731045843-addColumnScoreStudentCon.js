'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('StudentCons','score',{
      type : Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('StudentCons','score',{
      type : Sequelize.INTEGER
    })
  }
};
