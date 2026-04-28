import { TaskStatus } from '../../../common/enums/task-status.enum';
export declare class CreateTaskDto {
    name: string;
    projectId: string;
    assigneeId?: string;
    type: string;
    sourceLanguage: string;
    targetLanguage: string;
    status?: TaskStatus;
    deadline?: string;
    wordCount?: number;
    rate?: number;
    notes?: string;
}
