'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('storytelling', {  
      storyId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false 
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
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
    avatarId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'avatar',  // Nama tabel yang akan dijadikan referensi
        key: 'avatarId',       // Nama kolom pada tabel referensi
    },
  },
    
  });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('storytelling');
  }
};