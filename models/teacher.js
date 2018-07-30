'use strict';
module.exports = (sequelize, DataTypes) => {
  let Op = sequelize.Op
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args:true,
          msg: 'email format is incorrect'
        },
        notEmpty: {
          args: true,
          msg: 'Please input your email'
        },
        isUnique: function(value, next) {
          Teacher.findOne({
            where: {
              email: value,
              id: {
                [Op.ne]: this.id
              }
            }
          })
          .then(user => {
            if(user) {
              return next('Email already in use!');
            }
            next()
          })
          .catch(err => {
            return next(err)
          })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};