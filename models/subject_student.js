'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject_Student = sequelize.define('Subject_Student', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER  
  }, {});
  Subject_Student.associate = function(models) {
    // associations can be defined here
    Subject_Student.belongsTo(models.Subject)
    Subject_Student.belongsTo(models.Student)
  };
  return Subject_Student;
};