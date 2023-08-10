const categories = [
  { name: 'Task' },
  { name: 'Random Thought' },
  { name: 'Idea' },
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Categories', categories);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
