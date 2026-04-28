import { ProjectStatus } from '../../../common/enums/project-status.enum';
export declare class CreateProjectDto {
    name: string;
    description?: string;
    sourceLanguage: string;
    targetLanguages: string[];
    status?: ProjectStatus;
    clientId?: string;
    pmId?: string;
    deadline?: string;
    quotedPrice?: number;
    domain?: string;
}
