'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Student.getKeys = function(){
	return Object.keys(this.rawAttributes);
};
  Student.associate = function(models) {
	Student.hasMany(models.Enrollment);
	Student.belongsToMany(models.Subject, {through: 'Enrollment', foreignKey: 'StudentId'});
	
  };
  return Student;
};