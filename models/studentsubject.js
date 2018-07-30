'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
    const Subject = models.Subject
    const Student = models.Student
    StudentSubject.hasMany(Subject, { foreignKey: 'id' });
    StudentSubject.hasMany(Student, { foreignKey: 'id' });
  };
  return StudentSubject;
};