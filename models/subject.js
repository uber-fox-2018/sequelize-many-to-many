'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    const Teacher= models.Teacher;
    const Student = models.Student;
    const StudentSubject = models.StudentSubject;
   
    Subject.hasMany(Teacher, {foreignKey : "subjectId"})
    Subject.hasMany(StudentSubject, {foreignKey : "subjectId"})
    Subject.belongsToMany(Student,{through: StudentSubject, foreignKey: "subjectId"})
  };
  return Subject;
};