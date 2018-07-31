'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    const Teacher = models.Teacher
    const Student = models.Student
    Subject.hasMany(Teacher, {foreignKey: 'subjectId'});
    Subject.belongsToMany(Student, {through:models.StudentSubject,foreignKey: 'subjectId'})
  };
  return Subject;
};