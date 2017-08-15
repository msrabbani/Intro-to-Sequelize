'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {type: DataTypes.STRING,
        validate:{
        isEmail:{
             msg:"format email salah!"
         }
     }
 }
  }, {
    classMethods: {
      associate: function(models) {
         Student.belongsToMany(Subject, {through:'StudentSubjects'})
      }
    }
  });
  return Student;
};
