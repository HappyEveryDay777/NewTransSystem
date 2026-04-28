import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('corpus_entries')
export class CorpusEntry extends BaseEntity {
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

  @Column({ default: true })
  isAligned: boolean;

  @Column({ type: 'float', nullable: true })
  alignmentScore: number;
}
