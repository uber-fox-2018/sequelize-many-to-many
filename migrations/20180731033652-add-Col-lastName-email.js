'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn('Students', 'lastName', {type:Sequelize.STRING}),
   queryInterface.addColumn('Students', 'email', {type:Sequelize.STRING})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'lastName'), 
    queryInterface.removeColumn('Students','email')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
