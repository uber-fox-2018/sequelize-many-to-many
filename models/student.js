'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Wrong Email format!`
        },
        isUnique: function(value,cb){
          Student.findOne({
            where: {email: value},
            id: {[Op.ne]: this.id}
          })
          .then((data) => {
            if (!data) {
              cb()
            }else {
              cb(`Email is Duplicated`)
            }
          })
          .catch((err) => {
            cb(err)
          })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, {through: models.StudentSubject})
    Student.hasMany(models.StudentSubject)
  };
  return Student;
};