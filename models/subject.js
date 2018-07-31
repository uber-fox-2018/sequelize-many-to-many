'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING,
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student,{through:models.StudentSubject})
    Subject.hasMany(models.StudentSubject)
    Subject.hasMany(models.Teacher)
    // associations can be defined here
  };
  return Subject;
};