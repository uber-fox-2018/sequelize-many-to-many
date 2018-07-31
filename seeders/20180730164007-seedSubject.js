'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
      subjectName: 'Fisika',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        subjectName: 'Ekonomi',
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        }
    ], {});
    
    
    /*
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
