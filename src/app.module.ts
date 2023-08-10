import { Module } from '@nestjs/common';
import { NotesModule } from './modules/notes/notes.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './modules/notes/note.model';
import { Category } from './modules/categories/category.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Note, Category],
      repositoryMode: true,
      synchronize: false,
    }),
    NotesModule,
    CategoriesModule,
  ],
})
export class AppModule {}
