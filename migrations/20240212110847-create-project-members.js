'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('projectMembers', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   projectId: {
    //     type: Sequelize.INTEGER
    //   },
    //   memberId: {
    //     type: Sequelize.INTEGER
    //   },
    //   isOwner: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('projectMembers');
  }
};