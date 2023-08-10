import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  CreatedAt,
} from 'sequelize-typescript';
import { Category } from '../categories/category.model';

@Table({ updatedAt: false })
export class Note extends Model {
  @CreatedAt
  created: Date;

  @Column
  name: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @Column
  content: string;

  @Column
  dates: string;

  @Column
  archived: boolean;

  @BelongsTo(() => Category)
  category: Category;
}
