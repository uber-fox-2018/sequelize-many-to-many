'use strict';
const fs = require('fs')
class Teacher{
  constructor(fname,lname,email){
    this.firstName = fname
    this.lastName = lname
    this.email = email
  }
}

let result = []
let data = fs.readFileSync('./dataTeacher.csv','utf8')
let dataSplit = data.split('\n')

for(let i = 0; i < dataSplit.length; i++){
  let dataTeacher = dataSplit[i].split(',')
  let teacher = new Teacher(dataTeacher[0],dataTeacher[1],dataTeacher[2])
  result.push(teacher)
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers',result, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
