'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Students', [{
        firstname: 'Ujang',
        lastname: 'Kemod',
        email:'ujangkemods@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        firstname: 'Dadang',
        lastname: 'Gedang',
        email:'dadanggedangsz@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        firstname: 'Dudung',
        lastname: 'Taher',
        email:'dudungtaherd@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
