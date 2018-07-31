'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true
      }
    }
  }, {});
  Student.associate = function(models) {
    let Subject = models.Subject
    Student.belongsToMany(Subject, {through:models.Subject_Student, foreignKey: 'studentId'})
    // associations can be defined here
  };
  return Student;
};
      