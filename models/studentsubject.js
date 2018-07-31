'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
    // associations can be defined here
  };
  return StudentSubject;
};