'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: {
        type: Sequelize.STRING(32),
        allowNull: true
      },
      lastname: {
        type: Sequelize.STRING(32),
        allowNull: true
      },
      username: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      avatarurl: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
