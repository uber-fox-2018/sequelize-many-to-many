'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: [/[a-zA-z0-9]*@[a-zA-z0-9]+.com$/],
        isUnique: function (value, next) {

          Student.find({
              where: {
                email: value
              },
              attributes: ['id']
            })
            .done(function (error, user) {

              if (error)
                
                return next(error);

              if (user)
               
                return next('Email address already in use!');
              next();

            });

        }
      }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }, {});
  Student.associate = function (models) {
    const subject = models.Subject
    const enrollement = models.StudentCon
    Student.belongsToMany(subject,{through: enrollement, foreignKey: 'studentId'})
  };
  return Student;
};