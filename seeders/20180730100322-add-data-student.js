'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [
      {
        first_name: 'Ari',
        last_name: 'Supriatna',
        email: 'arisupriatna@gmail.com'
      }, 
      {
        first_name: 'Akbar',
        last_name: 'Sahata',
        email: 'akbarsahata@gmail.com'
      },
      {
        first_name: 'Agindo',
        last_name: 'Rahmat',
        email: 'agindorahmat@gmail.com'
      },
      {
        first_name: 'Dui',
        last_name: 'sumbang',
        email: 'duisumbang@gmail.com'
      },
      {
        first_name: 'Sergei',
        last_name: 'Dragunov',
        email: 'sergeidragunov@gmail.com'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {})
  }
};
