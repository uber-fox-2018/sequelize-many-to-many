'use strict';
module.exports = (sequelize, DataTypes) => {

  var StudentSubject = sequelize.define('StudentSubject', {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
  //   StudentSubject.belongsTo(models.Student);
  //   StudentSubject.belongsTo(models.Subject);
  };
  return StudentSubject;
};