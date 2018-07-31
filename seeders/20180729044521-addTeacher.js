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
   return queryInterface.bulkInsert('Teachers', 
   [
     {
        firstName: "Budi",
        lastName: "Kurniawan",
        email: "budikurniawan@school.com"
     },
     {
      firstName: "Ryan",
      lastName: "Ramadhan",
      email: "ryanramadhan@school.com"
    },
    {
      firstName: "Stella",
      lastName: "Putri",
      email: "stellaputri@school.com"
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
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
