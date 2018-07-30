'use strict';
module.exports = (sequelize, DataTypes) => {
  var Op = sequelize.Op
  var Teacher = sequelize.define('Teacher', {
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
        Teacher.findOne(
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
    }
  },
  SubjectId: DataTypes.INTEGER
  }, {hooks: {
    beforeCreate: (teacher, options) => {
      if (teacher.lastName == '') {
        teacher.lastName = 'NO-LAST-NAME';
      }
    }
  }
});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};