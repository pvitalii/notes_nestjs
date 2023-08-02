import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  getCategories() {
    return this.categoriesRepository.find();
  }

  findCategory(id: number) {
    return this.categoriesRepository.findOneBy({ id });
  }
}
