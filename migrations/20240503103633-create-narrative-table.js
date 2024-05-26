'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('narrative', {  
      narrativeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false 
    },
    stageId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'stage',  // Nama tabel yang akan dijadikan referensi
        key: 'stageId',       // Nama kolom pada tabel referensi
    },
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  
  });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('narrative');
  }
};