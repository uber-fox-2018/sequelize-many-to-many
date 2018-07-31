'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('StudentCons', [{
      studentId : 1,
      subjectId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      studentId : 1,
      subjectId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      studentId : 1,
      subjectId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      studentId : 1,
      subjectId : 4,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      studentId : 2,
      subjectId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      studentId : 2,
      subjectId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      studentId : 3,
      subjectId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      studentId : 4,
      subjectId : 4,
      createdAt : new Date(),
      updatedAt : new Date()
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};