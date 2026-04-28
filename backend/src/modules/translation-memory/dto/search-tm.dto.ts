import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class SearchTmDto {
  @ApiProperty()
  @IsString()
  sourceText: string;

  @ApiProperty()
  @IsString()
  sourceLanguage: string;

  @ApiProperty()
  @IsString()
  targetLanguage: string;

  @ApiPropertyOptional({ default: 70 })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  @Type(() => Number)
  minMatchRate?: number;
}
