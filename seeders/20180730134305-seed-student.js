'use strict';
const fs = require('fs')

class Student{
  constructor(fname,lname,email){
    this.firstName = fname
    this.lastName = lname
    this.email = email
  }
}

let result = []
let data = fs.readFileSync('./dataStudent.csv','utf8')
let dataSplit = data.split('\n')

for(let i = 0; i < dataSplit.length; i++){
  let dataStudent = dataSplit[i].split(',')
  let student = new Student(dataStudent[0],dataStudent[1],dataStudent[2])
  result.push(student)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',result, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
