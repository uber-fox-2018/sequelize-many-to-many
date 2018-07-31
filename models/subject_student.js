'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject_Student = sequelize.define('Subject_Student', {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {});
  Subject_Student.associate = function(models) {
    // associations can be defined here
    Subject_Student.belongsTo(models.Student,{foreignKey:'studentId'})
    Subject_Student.belongsTo(models.Subject,{foreignKey:'subjectId'})
  };
  return Subject_Student;
};