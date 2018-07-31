'use strict';
module.exports = (sequelize, DataTypes) => {
  var enroll = sequelize.define('enroll', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  enroll.associate = function(models) {
    // associations can be defined here
  };
  return enroll;
};