'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format is invalid'
        },
        isUnique: function(email, callback) {
          Student.findOne({
            where: {email: email},
            id: {[Op.ne]: Student.id}
          })
          .then(function(data) {
            if(data) {
              callback(`Email is already registered`)
            } else {
              callback()
            }
          })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, { through: models.Subject_Student})
    Student.hasMany(models.Subject_Student)
  };
  return Student;
};