'use strict';

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg : 'validation error'
        },
        unique : true
      },
      isEven(){
        
      }
    },
    subjectId: DataTypes.INTEGER,
    createdAt: new Date,
    updatedAt: new Date
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    const Subject = models.Subject
    Teacher.belongsTo(Subject, {foreignKey : 'subjectId'})
  };
  return Teacher;
};