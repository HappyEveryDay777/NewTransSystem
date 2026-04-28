import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QAIssueType, QAIssueSeverity } from '../entities/qa-issue.entity';

export class CreateQaIssueDto {
  @ApiProperty()
  @IsString()
  segmentId: string;

  @ApiProperty({ enum: QAIssueType })
  @IsEnum(QAIssueType)
  type: QAIssueType;

  @ApiPropertyOptional({ enum: QAIssueSeverity })
  @IsEnum(QAIssueSeverity)
  @IsOptional()
  severity?: QAIssueSeverity;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  reportedBy?: string;
}
