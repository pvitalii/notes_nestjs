import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CategoriesService } from 'src/modules/categories/categories.service';

@ValidatorConstraint({ async: true })
export class CategoryConstraintRule implements ValidatorConstraintInterface {
  constructor(private categoriesService: CategoriesService) {}

  private categoriesId: number[];

  async validate(categoryId: number) {
    const category = await this.categoriesService.findCategory(categoryId);
    if (category) {
      return true;
    } else {
      this.categoriesId = (await this.categoriesService.getCategories()).map(
        (category) => category.id,
      );
      return false;
    }
  }

  defaultMessage(): string {
    return `categoryId must be one of the following values: ${this.categoriesId.join(
      ', ',
    )}`;
  }
}
