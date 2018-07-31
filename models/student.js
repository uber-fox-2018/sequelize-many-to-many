'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject, {through: models.StudentSubject, foreignKey: "studentId"});
  };
  return Student;
};