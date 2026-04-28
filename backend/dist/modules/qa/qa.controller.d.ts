import { QaService } from './qa.service';
import { CreateQaIssueDto } from './dto/create-qa-issue.dto';
export declare class QaController {
    private readonly qaService;
    constructor(qaService: QaService);
    create(dto: CreateQaIssueDto): Promise<import("./entities/qa-issue.entity").QaIssue>;
    findAll(segmentId?: string): Promise<import("./entities/qa-issue.entity").QaIssue[]>;
    resolve(id: string, resolvedBy: string, resolution: string): Promise<import("./entities/qa-issue.entity").QaIssue>;
    remove(id: string): Promise<void>;
}
