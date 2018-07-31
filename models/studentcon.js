'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentCon = sequelize.define('StudentCon', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    score : DataTypes.INTEGER
  }, {});
  StudentCon.associate = function (models) {
    const student = models.Student
    const subject = models.Subject

    // StudentCon.hasMany(student, {
    //   foreignKey: 'id'
    // });
    // StudentCon.hasMany(subject, {
    //   through: 'id'
    // });
  };
  return StudentCon;
};