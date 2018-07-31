'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('Students','score',{
     type : Sequelize.INTEGER,
     defaultValue : null
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students','score',{
      type : Sequelize.INTEGER,
      defaultValue : null
    })
  }
};
