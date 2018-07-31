'use strict';

module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    const Teacher = models.Teacher
    const Student = models.Student
    Subject.hasMany(Teacher, {foreignKey : 'subjectId'})
    Subject.belongsToMany(Student, {through : 'StudentSubject', foreignKey: 'SubjectId'})
  };
  return Subject;
};