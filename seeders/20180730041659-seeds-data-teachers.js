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
    return queryInterface.bulkInsert('Teachers', [
      {
        firstName: "Annabelle",
        lastName: "Whiteley",
        email: "awhiteley0@icio.us",
        SubjectId: 2
      },
      {
        firstName: "Pascal",
        lastName: "Carling",
        email: "pcarling1@oakley.com",
        SubjectId: 1
      },
      {
        firstName: "Cally",
        lastName: "McManus",
        email: "cmcmanus2@ca.gov",
        SubjectId: 1
      },
      {
        firstName: "Lev",
        lastName: "Huertas",
        email: "lhuertas3@smh.com.au",
        SubjectId: 2
      },
      {
        firstName: "Sergei",
        lastName: "Dilrew",
        email: "sdilrew4@google.ru",
        SubjectId: 3
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers', null)
  }
};
