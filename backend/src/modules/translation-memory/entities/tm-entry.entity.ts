import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('tm_entries')
export class TmEntry extends BaseEntity {
  @Column({ type: 'text' })
  sourceText: string;

  @Column({ type: 'text' })
  targetText: string;

  @Column()
  sourceLanguage: string;

  @Column()
  targetLanguage: string;

  @Column({ nullable: true })
  clientId: string;

  @Column({ nullable: true })
  projectId: string;

  @Column({ nullable: true })
  domain: string;

  @Column({ type: 'integer', default: 0 })
  usageCount: number;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ default: true })
  isVerified: boolean;

  @Column({ type: 'jsonb', nullable: true })
  metadata: Record<string, any>;
}
