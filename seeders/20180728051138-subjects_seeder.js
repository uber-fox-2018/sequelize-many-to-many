'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let subject_seeds = [
      { subject_name: 'Kimia', createdAt: new Date, updatedAt: new Date },
      { subject_name: 'Ekonomi', createdAt: new Date, updatedAt: new Date }
    ]

    return queryInterface.bulkInsert('Subjects', subject_seeds, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
