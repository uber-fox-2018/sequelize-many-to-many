'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Teachers', ['email'], { type: 'unique', name: 'teacher_email_unique_constraint' })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Teachers', 'teacher_email_unique_constraint', {})
  }
};
