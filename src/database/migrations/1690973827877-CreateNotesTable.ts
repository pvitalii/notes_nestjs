import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNotesTable1690973827877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "note" (
                id integer PRIMARY KEY,
                name varchar(75),
                created datetime,
                "categoryId" int REFERENCES category,
                content varchar(700),
                dates varchar(255),
                archived boolean
            )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "note"`);
  }
}
