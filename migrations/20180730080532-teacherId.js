'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Subjects','teacherId',{
        type: Sequelize.INTEGER,
        defaultValues : null
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Subjects','teacherId',{
      type: Sequelize.INTEGER,
      defaultValues : null
    })
  }
};
