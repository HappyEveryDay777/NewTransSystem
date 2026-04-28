import { BaseEntity } from '../../../common/entities/base.entity';
import { ProjectStatus } from '../../../common/enums/project-status.enum';
import { Client } from '../../clients/entities/client.entity';
import { User } from '../../users/entities/user.entity';
export declare class Project extends BaseEntity {
    name: string;
    description: string;
    sourceLanguage: string;
    targetLanguages: string[];
    status: ProjectStatus;
    clientId: string;
    client: Client;
    pmId: string;
    pm: User;
    deadline: Date;
    quotedPrice: number;
    domain: string;
    workflowTemplate: {
        steps: {
            name: string;
            role: string;
            order: number;
        }[];
    };
    wordCount: {
        total: number;
        exactMatch: number;
        fuzzyMatch: number;
        noMatch: number;
    };
    referenceFiles: string;
    metadata: Record<string, any>;
}
