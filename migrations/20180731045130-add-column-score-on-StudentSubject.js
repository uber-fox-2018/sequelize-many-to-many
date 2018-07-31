'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('StudentSubjects','score',{ type: Sequelize.INTEGER });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('StudentSubjects','score');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
