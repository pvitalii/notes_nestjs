module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: Sequelize.TEXT,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Categories');
  },
};
