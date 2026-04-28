import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { TaskStatus } from '../../../common/enums/task-status.enum';
import { Project } from '../../projects/entities/project.entity';
import { User } from '../../users/entities/user.entity';

@Entity('tasks')
export class Task extends BaseEntity {
  @Column()
  name: string;

  @Column()
  projectId: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @Column({ nullable: true })
  assigneeId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'assigneeId' })
  assignee: User;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;

  @Column()
  type: string;

  @Column()
  sourceLanguage: string;

  @Column()
  targetLanguage: string;

  @Column({ nullable: true, type: 'timestamp' })
  deadline: Date;

  @Column({ nullable: true, type: 'timestamp' })
  startedAt: Date;

  @Column({ nullable: true, type: 'timestamp' })
  completedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  wordCount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rate: number;

  @Column({ nullable: true })
  notes: string;
}
