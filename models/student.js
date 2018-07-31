'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
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
          Student.find({
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
  Student.associate = function(models) {
    Student.hasMany(models.StudentSubject)
    Student.belongsToMany(models.Subject, {through: models.StudentSubject})
  };
  return Student;
};