'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {foreignKey: "subjectId"})
    Subject.belongsToMany(models.Student, { through: models.StudentSubject });
  };
  return Subject;
};