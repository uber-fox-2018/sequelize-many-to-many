'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    let Subject = models.Subject;
    Teacher.belongsTo(Subject, {foreignKey: 'subjectId'})
  };
  return Teacher;
};