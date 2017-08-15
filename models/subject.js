'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Subject.belongsToMany(Student, {through:'StudentSubjects'})
      }
    }
  });
  return Subject;
};
