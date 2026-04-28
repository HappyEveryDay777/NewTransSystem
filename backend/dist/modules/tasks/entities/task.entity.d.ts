import { BaseEntity } from '../../../common/entities/base.entity';
import { TaskStatus } from '../../../common/enums/task-status.enum';
import { Project } from '../../projects/entities/project.entity';
import { User } from '../../users/entities/user.entity';
export declare class Task extends BaseEntity {
    name: string;
    projectId: string;
    project: Project;
    assigneeId: string;
    assignee: User;
    status: TaskStatus;
    type: string;
    sourceLanguage: string;
    targetLanguage: string;
    deadline: Date;
    startedAt: Date;
    completedAt: Date;
    wordCount: number;
    rate: number;
    notes: string;
}
