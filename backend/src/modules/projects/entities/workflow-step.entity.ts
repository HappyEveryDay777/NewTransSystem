import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Project } from './project.entity';
import { User } from '../../users/entities/user.entity';

@Entity('workflow_steps')
export class WorkflowStep extends BaseEntity {
  @Column()
  projectId: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column({ type: 'integer' })
  order: number;

  @Column({ nullable: true })
  assigneeId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'assigneeId' })
  assignee: User;

  @Column({ default: 'pending' })
  status: string;

  @Column({ nullable: true, type: 'timestamp' })
  deadline: Date;
}
