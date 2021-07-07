'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        firstName: 'Andre',
        lastName: 'Sudi',
        createdAt: new Date(),
        updatedAt: new Date(), 
        email: 'andre@mail.id',
      }, 
      {
        firstName: 'Kiko',
        lastName: 'Mizuhara',
        createdAt: new Date(),
        updatedAt: new Date(), 
        email: 'kiko@mail.id',
      }, 
      {
        firstName: 'Lauren',
        lastName: 'Tsai',
        createdAt: new Date(),
        updatedAt: new Date(), 
        email: 'lauren@mail.id',
      }, 
      {
        firstName: 'Lily',
        lastName: 'Maymac',
        createdAt: new Date(),
        updatedAt: new Date(), 
        email: 'lily@mail.id',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Students', null, {});
  }
};
