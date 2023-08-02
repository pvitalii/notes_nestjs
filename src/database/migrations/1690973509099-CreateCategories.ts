import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategories1690973509099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" (
                id integer PRIMARY KEY,
                name varchar(255)
            )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
