'use strict';
const fs= require('fs')

class Subject{
  constructor(name){
    this.subjectName =name
  }
}

let result = []
let data = fs.readFileSync('./dataSubject.csv','utf8')
let dataSplit = data.split('\n')

for(let i = 0; i < dataSplit.length; i++){
  let dataSubject = dataSplit[i].split(',')
  let subject = new Subject(dataSubject[0])
  result.push(subject)
  // console.log(dataSubject[0]);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects',result, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
