import { BaseEntity } from '../../../common/entities/base.entity';
export declare class TmEntry extends BaseEntity {
    sourceText: string;
    targetText: string;
    sourceLanguage: string;
    targetLanguage: string;
    clientId: string;
    projectId: string;
    domain: string;
    usageCount: number;
    createdBy: string;
    isVerified: boolean;
    metadata: Record<string, any>;
}
