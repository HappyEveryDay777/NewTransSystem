import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
import { Task } from '../tasks/entities/task.entity';
export declare class ReportsService {
    private readonly projectsRepository;
    private readonly tasksRepository;
    constructor(projectsRepository: Repository<Project>, tasksRepository: Repository<Task>);
    getProjectSummary(): Promise<{
        total: number;
        byStatus: any[];
    }>;
    getTaskSummary(): Promise<{
        total: number;
        byStatus: any[];
    }>;
    getDashboard(): Promise<{
        projects: {
            total: number;
            byStatus: any[];
        };
        tasks: {
            total: number;
            byStatus: any[];
        };
    }>;
}
