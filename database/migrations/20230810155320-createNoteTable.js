module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notes', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: Sequelize.TEXT,
      created: Sequelize.DATE,
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id',
        },
        allowNull: false,
      },
      content: Sequelize.TEXT,
      dates: Sequelize.TEXT,
      archived: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Notes');
  },
};
