import { BaseEntity } from '../../../common/entities/base.entity';
import { FileEntity } from './file.entity';
export declare enum SegmentStatus {
    UNTRANSLATED = "untranslated",
    DRAFT = "draft",
    TRANSLATED = "translated",
    REVIEWED = "reviewed",
    APPROVED = "approved"
}
export declare class Segment extends BaseEntity {
    fileId: string;
    file: FileEntity;
    segmentNumber: number;
    sourceText: string;
    targetText: string;
    status: SegmentStatus;
    tmMatchRate: number;
    tmMatchSource: string;
    mtSuggestion: {
        text: string;
        provider: string;
        score: number;
    };
    comments: {
        userId: string;
        text: string;
        createdAt: string;
    }[];
}
