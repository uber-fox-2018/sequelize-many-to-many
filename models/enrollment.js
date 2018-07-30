'use strict';
module.exports = (sequelize, DataTypes) => {
  var Enrollment = sequelize.define('Enrollment', {
    student_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    score: DataTypes.REAL
  }, {});
  Enrollment.associate = function (models) {
    const Subject = models.Subject
    const Student = models.Student
    Enrollment.hasMany(Subject, { foreignKey: 'id' })
    Enrollment.hasMany(Student, { foreignKey: 'id' })
  };
  return Enrollment;
};