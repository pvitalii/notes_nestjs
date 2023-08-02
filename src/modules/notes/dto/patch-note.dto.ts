import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';
import { CategoryConstraintRule } from 'src/common/custom-validation-rules/category-in-constraint.rule';

export class PatchNoteDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(75)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name?: string;

  @IsOptional()
  @Validate(CategoryConstraintRule)
  categoryId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(700)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  content?: string;

  @IsOptional()
  @IsBoolean()
  archived?: boolean;
}
