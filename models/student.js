'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    TeacherId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,{through: models.StudentSubject})
    Student.hasMany(models.StudentSubject)
    // associations can be defined here
  };
  Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
  return Student;
};