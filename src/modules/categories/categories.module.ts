import { Module } from '@nestjs/common';
import { Category } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoryConstraintRule } from '../../common/custom-validation-rules/category-in-constraint.rule';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService, CategoryConstraintRule],
})
export class CategoriesModule {}
