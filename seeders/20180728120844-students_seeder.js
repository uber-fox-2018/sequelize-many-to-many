'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let student_seed = [
      { first_name: "Marie", last_name: "Antoinette", email: "marieantoinette@mail.gov.fr", createdAt: new Date, updatedAt: new Date },
      { first_name: "Arthur", last_name: "Pendragon", email: "arthurpendragon@mail.uk", createdAt: new Date, updatedAt: new Date },
      { first_name: "Alexander", last_name: "", email: "iskandar@mail.com", createdAt: new Date, updatedAt: new Date },
      { first_name: "Vladmir", last_name: "III", email: "countdracula@mail.id", createdAt: new Date, updatedAt: new Date },
      { first_name: "William", last_name: "Shakesphere", email: "shakespherew@mail.uk", createdAt: new Date, updatedAt: new Date },
      { first_name: "Nero", last_name: "Claudius", email: "neroclaudius@mail.com", createdAt: new Date, updatedAt: new Date },
      { first_name: "Amakusa Shiro", last_name: "Tokisada", email: "amakusashiro@mail.jp", createdAt: new Date, updatedAt: new Date }
    ]

    return queryInterface.bulkInsert('Students', student_seed, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {})
  }
};
