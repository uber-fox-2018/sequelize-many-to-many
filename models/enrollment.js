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
    Enrollment.belongsTo(Subject, { foreignKey: 'subject_id' })
    Enrollment.belongsTo(Student, { foreignKey: 'student_id' })
  };
  return Enrollment;
};