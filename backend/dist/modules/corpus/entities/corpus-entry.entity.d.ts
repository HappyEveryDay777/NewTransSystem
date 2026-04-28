import { BaseEntity } from '../../../common/entities/base.entity';
export declare class CorpusEntry extends BaseEntity {
    sourceText: string;
    targetText: string;
    sourceLanguage: string;
    targetLanguage: string;
    clientId: string;
    projectId: string;
    domain: string;
    isAligned: boolean;
    alignmentScore: number;
}
