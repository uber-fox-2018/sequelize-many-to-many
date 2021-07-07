'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Students', ['email'], { type: 'unique', name: 'student_email_unique_constraint' })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Students', 'student_email_unique_constraint', {})
  }
};
