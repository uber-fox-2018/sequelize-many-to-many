'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          field: 'id'
        }
      },
      subject_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Subjects',
          field: 'id'
        }
      },
      score: {
        type: Sequelize.REAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  }
};