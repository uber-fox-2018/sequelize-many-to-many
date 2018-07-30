'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email   : {
      type    : DataTypes.STRING,
      isUnique :true,
      allowNull:false,
      validate:{
          isEmail : true
      }
     },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {
      foreignKey: "subjectId"
    })
  };
  return Teacher;
};