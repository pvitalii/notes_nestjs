import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './modules/notes/notes.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.cwd()}/src/database/database.db`,
      entities: [`${process.cwd()}/dist/**/*.entity.js`],
      synchronize: false,
      migrations: [`${process.cwd()}/dist/database/migrations/*.js`],
      migrationsRun: true,
    }),
    NotesModule,
    CategoriesModule,
  ],
})
export class AppModule {}
