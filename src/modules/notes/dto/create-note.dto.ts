import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, Validate } from 'class-validator';
import { CategoryConstraintRule } from 'src/common/custom-validation-rules/category-in-constraint.rule';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(75)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @Validate(CategoryConstraintRule)
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(700)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  content: string;
}
