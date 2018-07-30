'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    let Teacher = models.Teacher;
    Subject.hasMany(Teacher, { foreignKey: 'SubjectId' })
  };
  return Subject;
};
