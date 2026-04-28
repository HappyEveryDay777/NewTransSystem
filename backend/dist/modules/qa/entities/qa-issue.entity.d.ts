import { BaseEntity } from '../../../common/entities/base.entity';
import { Segment } from '../../files/entities/segment.entity';
export declare enum QAIssueType {
    TERMINOLOGY = "terminology",
    NUMBER = "number",
    TAG = "tag",
    UNTRANSLATED = "untranslated",
    PUNCTUATION = "punctuation",
    SPELLING = "spelling",
    TM_CONSISTENCY = "tm_consistency",
    MANUAL = "manual"
}
export declare enum QAIssueSeverity {
    MINOR = "minor",
    MAJOR = "major",
    CRITICAL = "critical"
}
export declare enum QAIssueStatus {
    OPEN = "open",
    REPLIED = "replied",
    RESOLVED = "resolved",
    REJECTED = "rejected"
}
export declare class QaIssue extends BaseEntity {
    segmentId: string;
    segment: Segment;
    type: QAIssueType;
    severity: QAIssueSeverity;
    status: QAIssueStatus;
    description: string;
    reportedBy: string;
    resolvedBy: string;
    resolution: string;
}
