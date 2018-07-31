'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING

  }, {});
  Subject.associate = function(models) {
    const teacher = models.Teacher
    const student = models.Student
    const enrollement = models.StudentCon
    Subject.hasMany(teacher,{foreignKey: 'subjectId'})
    Subject.belongsToMany(student,{through: enrollement, foreignKey: 'subjectId'})
  };
  return Subject;
};