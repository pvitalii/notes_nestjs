import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column()
  content: string;

  @Column()
  dates: string;

  @Column()
  archived: boolean;

  @ManyToOne(() => Category, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
