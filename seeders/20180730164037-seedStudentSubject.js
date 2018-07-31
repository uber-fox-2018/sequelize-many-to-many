'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentSubjects', [
      {
        studentId: 1,
        subjectId: 1,
        score: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 2,
        subjectId: 2,
        score: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
        }
    ], {});/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
