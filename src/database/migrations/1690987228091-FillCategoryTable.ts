import { NOTE_CATEGORY } from 'src/modules/categories/note-category.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillCategoryTable1690987228091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    Object.values(NOTE_CATEGORY).forEach(async (category) => {
      await queryRunner.query(
        `INSERT INTO "category"("name") VALUES ('${category}')`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE from "category"`);
  }
}
