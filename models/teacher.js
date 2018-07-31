'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        is: {
          args:/^\w+@[a-z]+\.[a-z]{3}$/,
          msg: "Email format is incorrect"
        },
        isUnique: (email, next) => {
          Teacher.find({
              where:{email:email},
              attributes:["id"]
          })
              .done((error, user)=>{
                if(error)
                  return next("Email address already in use");
                if(user)
                  return next("Email address already in use!");
                next();
              });
            }
          }
        },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    let Subject = models.Subject;
    Teacher.belongsTo(Subject, {foreignKey: 'subjectId'})
  };
  return Teacher;
};