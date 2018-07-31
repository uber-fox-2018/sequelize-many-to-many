'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teachers = sequelize.define('Teachers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Teachers.associate = function(models) {
    // associations can be defined here
    let Subject = models.Subject
    Teachers.belongsTo(Subject,{foreignKey:'subjectId'})
  };
  return Teachers;
};