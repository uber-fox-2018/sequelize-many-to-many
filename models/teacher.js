'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Checks your email format (foo@bar.com)'
        },
        isUnique: function(value, next){
          Teacher.findOne({where: {email: value, id: { [Op.ne]: this.id}
          }
        })
          .then(email => {
            if(email !== null){
              return next('Email is already used here')
            } else {
              return next()
            }
          })
          .catch(err =>{
            return next(err)
          })
        }
      }
    }
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};