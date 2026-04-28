import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
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
    getProjectReport(): Promise<{
        total: number;
        byStatus: any[];
    }>;
    getTaskReport(): Promise<{
        total: number;
        byStatus: any[];
    }>;
}
