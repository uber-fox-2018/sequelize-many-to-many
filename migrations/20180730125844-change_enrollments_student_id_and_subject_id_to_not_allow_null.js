'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn('Enrollments', 'student_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Students',
          field: 'id'
        }
      }),

      queryInterface.changeColumn('Enrollments', 'subject_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Subjects',
          field: 'id'
        }
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn('Enrollments', 'student_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Students',
          field: 'id'
        }
      }),

      queryInterface.changeColumn('Enrollments', 'subject_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Subjects',
          field: 'id'
        }
      })
    ]
  }
};
