'use strict';
module.exports = (sequelize, DataTypes) => {
  var Op = sequelize.Op
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {type : DataTypes.STRING,
             validate : {
              isEmail : {
                args : true,
                msg : 'format email is incorrect '
              },
              isUnique: function (value, next) {
                Teacher.findOne(
                    {
                      where:{
                        email: value,
                        id : {[Op.ne] : this.id }
                      }
                      
                    }
                  )
                    .then(function (user) {
                      console.log(user);
                      
                      if(user){
                        next('Email already in use!')
                      }
                      next()
            
                    })
                    .catch(function (err) {
                        next(err);
                    });
            }
             }
            },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };

  Teacher.prototype.fullname = function (){
    return `${this.firstName} ${this.lastName}`
  }
  return Teacher;
};