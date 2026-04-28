import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Segment } from '../../files/entities/segment.entity';

export enum QAIssueType {
  TERMINOLOGY = 'terminology',
  NUMBER = 'number',
  TAG = 'tag',
  UNTRANSLATED = 'untranslated',
  PUNCTUATION = 'punctuation',
  SPELLING = 'spelling',
  TM_CONSISTENCY = 'tm_consistency',
  MANUAL = 'manual',
}

export enum QAIssueSeverity {
  MINOR = 'minor',
  MAJOR = 'major',
  CRITICAL = 'critical',
}

export enum QAIssueStatus {
  OPEN = 'open',
  REPLIED = 'replied',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}

@Entity('qa_issues')
export class QaIssue extends BaseEntity {
  @Column()
  segmentId: string;

  @ManyToOne(() => Segment)
  @JoinColumn({ name: 'segmentId' })
  segment: Segment;

  @Column({ type: 'enum', enum: QAIssueType })
  type: QAIssueType;

  @Column({ type: 'enum', enum: QAIssueSeverity, default: QAIssueSeverity.MINOR })
  severity: QAIssueSeverity;

  @Column({ type: 'enum', enum: QAIssueStatus, default: QAIssueStatus.OPEN })
  status: QAIssueStatus;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  reportedBy: string;

  @Column({ nullable: true })
  resolvedBy: string;

  @Column({ nullable: true, type: 'text' })
  resolution: string;
}
