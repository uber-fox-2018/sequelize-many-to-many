'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 255],
          msg: "First name have to be at least 3 characters"
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { msg: "Email is not valid" }
      }
    }
  }, {});
  Student.associate = function (models) {
    const Subject = models.Subject
    Student.belongsToMany(Subject, { through: 'Enrollment', foreignKey: 'student_id' })
  };
  return Student;
};