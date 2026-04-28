import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTranslatorDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  sourceLanguages: string[];

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  targetLanguages: string[];

  @ApiPropertyOptional({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  domains?: string[];

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  ratePerWord?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  bio?: string;
}
