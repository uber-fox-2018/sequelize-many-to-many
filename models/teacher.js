'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `email format is invalid`
        },
        isUnique: function(email, callback) {
          Teacher.findOne(
            {
              where: {email: email}, 
              id: {[Op.ne]: this.id}
            }
          )
          .then(function (sameEmail) {
            if (sameEmail == null) {
              callback(`email already in used`)
            } else {
              callback()
            }
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