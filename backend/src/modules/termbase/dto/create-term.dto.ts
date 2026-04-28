import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTermDto {
  @ApiProperty()
  @IsString()
  sourceTerm: string;

  @ApiProperty()
  @IsString()
  targetTerm: string;

  @ApiProperty()
  @IsString()
  sourceLanguage: string;

  @ApiProperty()
  @IsString()
  targetLanguage: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  clientId?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  domain?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  definition?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  isForbidden?: boolean;
}
