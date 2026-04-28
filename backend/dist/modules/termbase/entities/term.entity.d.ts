import { BaseEntity } from '../../../common/entities/base.entity';
export declare class Term extends BaseEntity {
    sourceTerm: string;
    targetTerm: string;
    sourceLanguage: string;
    targetLanguage: string;
    clientId: string;
    domain: string;
    definition: string;
    context: string;
    isForbidden: boolean;
    notes: string;
    isActive: boolean;
}
