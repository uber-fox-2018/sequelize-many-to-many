'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Teachers', [
      {
      firstName: 'Bambang',
      lastName: 'Suprapto',
      email: 'bambangsuprapto@mail.com',
      subjectId : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Rukmana',
      lastName: 'Fatmawati',
      email: 'rukmanafatmawati@mail.com',
      subjectId : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Butet',
      lastName: 'Naiborhu',
      email: 'butetnaiborhu@mail.com',
      subjectId : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Yulius',
      lastName: 'Prawiranegara',
      email: 'Yuliusprawiranegara@mail.com',
      subjectId: 2,
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
