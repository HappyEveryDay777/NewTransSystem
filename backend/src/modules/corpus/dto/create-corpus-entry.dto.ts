import { IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCorpusEntryDto {
  @ApiProperty()
  @IsString()
  sourceText: string;

  @ApiProperty()
  @IsString()
  targetText: string;

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
}
