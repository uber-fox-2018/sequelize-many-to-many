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
   return queryInterface.bulkInsert('Students', 
   [
    {
      firstName: "Wahyudi",
      lastName: "Setiaji",
      email: "wahyudisetiaji@gmail.com",
    },
    {
      firstName: "Ricky",
      lastName: "Hidayat",
      email: "rickyhidayat@gmail.com",
    },
    {
      firstName: "Nur",
      lastName: "Fitri Aprilia",
      email: "nurfitriaprilia@gmail.com",
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
   return queryInterface.bulkDelete('Students', null, {});
  }
};
