import { IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../../../common/enums/task-status.enum';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  projectId: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  assigneeId?: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  sourceLanguage: string;

  @ApiProperty()
  @IsString()
  targetLanguage: string;

  @ApiPropertyOptional({ enum: TaskStatus })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  deadline?: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  wordCount?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  rate?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string;
}
