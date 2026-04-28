import { QAIssueType, QAIssueSeverity } from '../entities/qa-issue.entity';
export declare class CreateQaIssueDto {
    segmentId: string;
    type: QAIssueType;
    severity?: QAIssueSeverity;
    description: string;
    reportedBy?: string;
}
