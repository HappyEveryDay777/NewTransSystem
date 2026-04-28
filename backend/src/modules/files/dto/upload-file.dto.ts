import { IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty()
  @IsString()
  projectId: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sourceLanguage?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  targetLanguage?: string;
}
