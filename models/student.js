'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    const Subject = models.Subject
    Student.belongsToMany(Subject, {through : 'StudentSubject', foreignKey: 'StudentId'})
  };
  return Student;
};