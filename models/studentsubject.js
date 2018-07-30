'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
    StudentSubject.belongsTo(models.Student)
    StudentSubject.belongsTo(models.Subject)
    // associations can be defined here
  };
  return StudentSubject;
};