'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function (models) {
    const Teacher = models.Teacher
    const Student = models.Student

    Subject.hasMany(Teacher, { foreignKey: 'subject_id' })
    Subject.belongsToMany(Student, { through: 'Enrollment', foreignKey: 'subject_id' })
  };
  return Subject;
};