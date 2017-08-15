'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        StudentSubject.belongsTo(Subject)
        StudentSubject.belongsTo(Student)
      }
    }
  });
  return StudentSubject;
};
