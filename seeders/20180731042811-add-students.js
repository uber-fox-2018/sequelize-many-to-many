'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@sekolah.id',
    },{
      first_name: 'Hi',
      last_name: 'Jack',
      email: 'that@sekolah.id',
    },{
      first_name: 'Max',
      last_name: 'Mofoe',
      email: 'maxis@sekolah.id',
    },{
      first_name: 'Filthy',
      last_name: 'Frank',
      email: 'franku@sekolah.id',
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
