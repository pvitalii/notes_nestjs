import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Note } from '../notes/note.model';

@Table({ timestamps: false })
export class Category extends Model {
  @Column
  name: string;

  @HasMany(() => Note)
  notes: Note[];
}
