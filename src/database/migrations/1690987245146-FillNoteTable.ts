import { MigrationInterface, QueryRunner } from 'typeorm';

const initialNotes = [
  {
    id: 1,
    created: 'April 20, 2021',
    name: 'Shopping List',
    category: 1,
    content: 'Tomatoes, bread',
    dates: '',
    archived: false,
  },
  {
    id: 2,
    created: 'April 27, 2021',
    name: 'The theory of evolution',
    category: 2,
    content:
      'The theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles Darwin',
    dates: '',
    archived: false,
  },
  {
    id: 3,
    created: 'May 03, 2021',
    name: 'New Feature',
    category: 3,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false,
  },
  {
    id: 4,
    created: 'May 07, 2021',
    name: 'William Gaddis',
    category: 2,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false,
  },
  {
    id: 5,
    created: 'May 15, 2021',
    name: 'Books',
    category: 1,
    content: 'The Lean Startup',
    dates: '',
    archived: false,
  },
  {
    id: 6,
    created: 'May 03, 2021',
    name: 'New Feature',
    category: 3,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false,
  },
  {
    id: 7,
    created: 'May 07, 2021',
    name: 'William Gaddis',
    category: 2,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false,
  },
];

export class FillNoteTable1690987245146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    initialNotes.forEach(async (note) => {
      await queryRunner.query(
        `INSERT INTO "note"("name", "created", "categoryId", "content", "dates", "archived") 
        VALUES ("${note.name}", "${note.created}", "${note.category}", "${note.content}", "${note.dates}", ${note.archived})`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "note"`);
  }
}
