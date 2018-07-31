'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let rawData =  fs.readFileSync('./studentData.json')
    let data = JSON.parse(rawData)
    let result = []

    for (let i = 0; i < data.length; i++) {
      data[i].createdAt = new Date()
      data[i].updatedAt = new Date()
      result.push(data[i])
    }

    return queryInterface.bulkInsert('Students', result, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
