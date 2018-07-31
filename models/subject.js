'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    let Student = models.Student
    let Teachers = models.Teachers
    Subject.hasMany(Teachers,{foreignKey:'subjectId'})
    Subject.belongsToMany(Student,{foreignKey:'subjectId',through:models.Subject_Student})
    
  };
  return Subject;
};