'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
    {
      subjectName : 'Ekonomi',
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      subjectName : 'Fisika',
      createdAt : new Date,
      updatedAt : new Date
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
