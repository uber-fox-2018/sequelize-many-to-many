'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Teachers', 'subject_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Subjects',
        field: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Teachers', 'subject_id')
  }
};
