'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    const Subject = models.Subject;
    const StudentSubject = models.StudentSubject;
    Student.hasMany(StudentSubject, {foreignKey : "studentId"})
    Student.belongsToMany(Subject,{through: StudentSubject, foreignKey: "studentId"})
  };
  return Student;
};