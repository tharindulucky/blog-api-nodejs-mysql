'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'NodeJs'
      },
      {
        name: 'VueJS'
      },
      {
        name: 'ReactJS'
      },
      {
        name: 'ReactNative'
      },
      {
        name: 'Laravel'
      },
      {
        name: 'Flutter'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories',{}, null);
  }
};
