'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: [/[a-zA-z0-9]*@[a-zA-z0-9]+.com$/],
        isUnique: function (value, next) {

          Teacher.find({
              where: {
                email: value
              },
              attributes: ['id']
            })
            .done(function (error, user) {

              if (error)
                // Some unexpected error occured with the find method.
                return next(error);

              if (user)
                // We found a user with this email address.
                // Pass the error to the next method.
                return next('Email address already in use!');

              // If we got this far, the email address hasn't been used yet.
              // Call next with no arguments when validation is successful.
              next();

            });

        }
      }
    },
    subjectId: {
      type: DataTypes.INTEGER,
      defaultValues: null
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }, {});
  Teacher.associate = function (models) {
    const Subject = models.Subject
    Teacher.belongsTo(Subject, {
      foreignKey: 'subjectId'
    })
  };
  return Teacher;
};