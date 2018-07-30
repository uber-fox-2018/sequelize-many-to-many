'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let teacher_seeds = [
      { first_name: "Bambang", last_name: "Suprapto", email: "bambangsuprapto@sekolah.id", createdAt: new Date, updatedAt: new Date },
      { first_name: "Rukmana", last_name: "Fatawati", email: "rukmanafatmawati@sekolah.id", createdAt: new Date, updatedAt: new Date },
      { first_name: "Butet", last_name: "Naiborhu", email: "butetnaiborhu@sekolah.id", createdAt: new Date, updatedAt: new Date },
      { first_name: "Yulius", last_name: "Prawinegara", email: "yuliusprawinegara@sekolah.id", createdAt: new Date, updatedAt: new Date }
    ]

    return queryInterface.bulkInsert('Teachers', teacher_seeds, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};
