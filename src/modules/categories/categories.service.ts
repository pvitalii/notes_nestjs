import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Category } from './category.model';

@Injectable()
export class CategoriesService {
  constructor(private sequelize: Sequelize) {
    this.categoriesRepository = this.sequelize.getRepository(Category);
  }

  private categoriesRepository: Repository<Category>;

  getCategories() {
    return this.categoriesRepository.findAll();
  }

  findCategory(id: number) {
    return this.categoriesRepository.findByPk(id);
  }
}
