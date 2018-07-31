'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Wrong email format'
        },
        isUnique: function (value, cb){
          Teacher.find({
            where: {
              email: value,
              id : {
                $ne: this.id
              }
            }
          })
          .then(function (user) {
            if(user){
              return cb ('Another user has used that email');
            }
            return cb()
          })
          .catch (function (err) {
            return cb (err);
          })
        }
      }
    }
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};