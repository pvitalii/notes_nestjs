import { NOTE_CATEGORY } from 'src/modules/categories/note-category.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: NOTE_CATEGORY;
}
