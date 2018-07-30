'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function (models) {
    const Teacher = models.Teacher
    Subject.hasMany(Teacher, { foreignKey: 'subject_id' })
  };
  return Subject;
};