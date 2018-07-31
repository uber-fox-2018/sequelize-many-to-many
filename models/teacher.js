'use strict';
// const Subject = require('./subject')

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: {
      type:DataTypes.STRING,
    },
    lastName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate : {
        isEmail: true
      },
        unique: true
    },
    subjectId: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    const Subject = models.Subject
    Teacher.belongsTo(Subject,{foreignKey: 'subjectId'});
  };
  return Teacher;
};