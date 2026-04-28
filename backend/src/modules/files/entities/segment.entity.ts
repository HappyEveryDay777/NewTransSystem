import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { FileEntity } from './file.entity';

export enum SegmentStatus {
  UNTRANSLATED = 'untranslated',
  DRAFT = 'draft',
  TRANSLATED = 'translated',
  REVIEWED = 'reviewed',
  APPROVED = 'approved',
}

@Entity('segments')
export class Segment extends BaseEntity {
  @Column()
  fileId: string;

  @ManyToOne(() => FileEntity)
  @JoinColumn({ name: 'fileId' })
  file: FileEntity;

  @Column({ type: 'integer' })
  segmentNumber: number;

  @Column({ type: 'text' })
  sourceText: string;

  @Column({ type: 'text', nullable: true })
  targetText: string;

  @Column({ type: 'enum', enum: SegmentStatus, default: SegmentStatus.UNTRANSLATED })
  status: SegmentStatus;

  @Column({ nullable: true })
  tmMatchRate: number;

  @Column({ nullable: true })
  tmMatchSource: string;

  @Column({ type: 'jsonb', nullable: true })
  mtSuggestion: { text: string; provider: string; score: number };

  @Column({ type: 'jsonb', nullable: true })
  comments: { userId: string; text: string; createdAt: string }[];
}
