"use strict";
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "email must contain @ and . or email alreay been used"
          },
          isUnique: function(email, cb) {
            Student.findOne({ where: { email: email } }).then(function(valid) {
              if (valid) {
                cb(true);
              } else {
                cb(false);
              }
            });
          }
        }
      }
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, { through: models.SubjectStudent });
  };
  return Student;
};
