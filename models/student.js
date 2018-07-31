'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    let Subject = models.Subject
    Student.belongsToMany(Subject, {through:models.StudentSubject,foreignKey:'subjectId'})
  };
  return Student;
};