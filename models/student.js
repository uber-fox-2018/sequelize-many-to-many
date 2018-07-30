'use strict';
module.exports = (sequelize, DataTypes) => {
  var Op = sequelize.Op
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
    validate: {
      is: {
        args: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        msg: `Email format is incorrect!`
      },
      isUnique: function(value, next) {
        Student.findOne(
          {where: {email: value, id: {
            [Op.ne]: this.id
          }}
        })
        .then(input => {
          if (input !== null) {
            return next(`Email already exist!`);
          } else {
            return next();
          }
        })
        .catch(err => {
          return next(`Error message:`, err);
        })
      }
    }}
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.hasMany(models.StudentSubject);
    Student.belongsToMany(models.Subject, {through: models.StudentSubject});
  };
  return Student;
};