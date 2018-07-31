'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
    // associations can be defined here
  };
  Teacher.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
  return Teacher;
};