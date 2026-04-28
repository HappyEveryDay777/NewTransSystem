import { Repository } from 'typeorm';
import { QaIssue } from './entities/qa-issue.entity';
import { CreateQaIssueDto } from './dto/create-qa-issue.dto';
export declare class QaService {
    private readonly qaRepository;
    constructor(qaRepository: Repository<QaIssue>);
    create(dto: CreateQaIssueDto): Promise<QaIssue>;
    findAll(segmentId?: string): Promise<QaIssue[]>;
    resolve(id: string, resolvedBy: string, resolution: string): Promise<QaIssue>;
    remove(id: string): Promise<void>;
}
