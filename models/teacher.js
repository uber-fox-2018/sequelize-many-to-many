'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "email format is correct"
        },
        unique: {
          args: true,
          msg: 'Email address already in use!'
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {
  	order: [
  		sequelize.fn('max', sequelize.col('age')),
  	]
  });
  Teacher.associate = function(models) {
  	let Subject = models.Subject;
    Teacher.belongsTo(Subject)
  };

  // const model = require('./models')
  // const Subject = model.Subject
  // Project.belongsTo(Subject)

  return Teacher;
};