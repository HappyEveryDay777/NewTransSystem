import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Project } from '../../projects/entities/project.entity';

@Entity('files')
export class FileEntity extends BaseEntity {
  @Column()
  originalName: string;

  @Column()
  storagePath: string;

  @Column()
  mimeType: string;

  @Column({ type: 'bigint' })
  size: number;

  @Column()
  projectId: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @Column({ default: 1 })
  currentVersion: number;

  @Column({ nullable: true })
  sourceLanguage: string;

  @Column({ nullable: true })
  targetLanguage: string;

  @Column({ default: false })
  isParsed: boolean;

  @Column({ type: 'integer', default: 0 })
  segmentCount: number;

  @Column({ type: 'jsonb', nullable: true })
  wordCountStats: Record<string, any>;
}
