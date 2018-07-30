'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [
    {
      firstName : 'Bambang',
      lastName : 'Suprapto',
      email: 'bambangsuprato@sekolah.id',
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      firstName : 'Rukmana',
      lastName : 'Fatmawati',
      email: 'rukmanafatmawati@sekolah.id',
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      firstName : 'Butet',
      lastName : 'Naiborhu',
      email: 'butetnaiborhu@sekolah.id',
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      firstName : 'Yulius',
      lastName : 'Prawiranegara',
      email: 'yuliusprawiranegara@sekolah.id',
      createdAt : new Date,
      updatedAt : new Date
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};
