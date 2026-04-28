import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { ProjectStatus } from '../../../common/enums/project-status.enum';
import { Client } from '../../clients/entities/client.entity';
import { User } from '../../users/entities/user.entity';

@Entity('projects')
export class Project extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  sourceLanguage: string;

  @Column({ type: 'simple-array' })
  targetLanguages: string[];

  @Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.DRAFT })
  status: ProjectStatus;

  @Column({ nullable: true })
  clientId: string;

  @ManyToOne(() => Client, { nullable: true })
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column({ nullable: true })
  pmId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'pmId' })
  pm: User;

  @Column({ nullable: true, type: 'timestamp' })
  deadline: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  quotedPrice: number;

  @Column({ nullable: true })
  domain: string;

  @Column({ type: 'jsonb', nullable: true })
  workflowTemplate: {
    steps: { name: string; role: string; order: number }[];
  };

  @Column({ type: 'jsonb', nullable: true })
  wordCount: {
    total: number;
    exactMatch: number;
    fuzzyMatch: number;
    noMatch: number;
  };

  @Column({ nullable: true })
  referenceFiles: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata: Record<string, any>;
}
