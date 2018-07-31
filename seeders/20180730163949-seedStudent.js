'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Students', [
      {
      firstName: 'Jeremy',
      lastName: 'William',
      email: 'jeremy@mail.com',
      subjectId : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Jacob',
      lastName: 'Mikhael',
      email: 'jacob@mail.com',
      subjectId : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Judah',
      lastName: 'Salvatore',
      email: 'judah@mail.com',
      subjectId : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Noah',
      lastName: 'William',
      email: 'noah@mail.com',
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
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
