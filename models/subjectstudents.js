'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubjectStudents = sequelize.define('SubjectStudents', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
  }, {});
  SubjectStudents.associate = function(models) {
    // associations can be defined here
    SubjectStudents.belongsTo(models.Student)
    SubjectStudents.belongsTo(models.Subject)
  };
  return SubjectStudents;
};