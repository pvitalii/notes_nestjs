const initialNotes = [
  {
    created: 'April 20, 2021',
    name: 'Shopping List',
    categoryId: 1,
    content: 'Tomatoes, bread',
    dates: '',
    archived: false,
  },
  {
    created: 'April 27, 2021',
    name: 'The theory of evolution',
    categoryId: 2,
    content:
      'The theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles Darwin',
    dates: '',
    archived: false,
  },
  {
    created: 'May 03, 2021',
    name: 'New Feature',
    categoryId: 3,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false,
  },
  {
    created: 'May 07, 2021',
    name: 'William Gaddis',
    categoryId: 2,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false,
  },
  {
    created: 'May 15, 2021',
    name: 'Books',
    categoryId: 1,
    content: 'The Lean Startup',
    dates: '',
    archived: false,
  },
  {
    created: 'May 03, 2021',
    name: 'New Feature',
    categoryId: 3,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false,
  },
  {
    created: 'May 07, 2021',
    name: 'William Gaddis',
    categoryId: 2,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false,
  },
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Notes', initialNotes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Notes', null, {});
  },
};
