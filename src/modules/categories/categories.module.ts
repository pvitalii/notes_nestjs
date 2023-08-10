import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryConstraintRule } from '../../common/custom-validation-rules/category-in-constraint.rule';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoriesService, CategoryConstraintRule],
})
export class CategoriesModule {}
