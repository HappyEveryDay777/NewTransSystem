import { BaseEntity } from '../../../common/entities/base.entity';
import { Project } from './project.entity';
import { User } from '../../users/entities/user.entity';
export declare class WorkflowStep extends BaseEntity {
    projectId: string;
    project: Project;
    name: string;
    role: string;
    order: number;
    assigneeId: string;
    assignee: User;
    status: string;
    deadline: Date;
}
