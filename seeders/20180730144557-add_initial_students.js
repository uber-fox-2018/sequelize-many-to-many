'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        first_name : 'Susan',
        last_name : 'Nio',
        email: 'susan@mail.com',
        createdAt : new Date,
        updatedAt : new Date
      },
      {
        first_name : 'Nio',
        last_name : 'Susan',
        email: 'nio@mail.com',
        createdAt : new Date,
        updatedAt : new Date
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {})
  }
};
