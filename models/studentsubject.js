'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function (models) {
    const Students = models.Student
    const Subjects = models.Subject
    StudentSubject.belongsTo(Students, {foreignKey: 'studentId'});
    StudentSubject.belongsTo(Subjects, {foreignKey: 'subjectId'});
  };
return StudentSubject;
};