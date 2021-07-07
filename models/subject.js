'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    Subject.belongsToMany(models.Student, { through: models.Subject_Student})
    Subject.hasMany(models.Subject_Student)
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};