import { BaseEntity } from '../../../common/entities/base.entity';
import { Project } from '../../projects/entities/project.entity';
export declare class FileEntity extends BaseEntity {
    originalName: string;
    storagePath: string;
    mimeType: string;
    size: number;
    projectId: string;
    project: Project;
    currentVersion: number;
    sourceLanguage: string;
    targetLanguage: string;
    isParsed: boolean;
    segmentCount: number;
    wordCountStats: Record<string, any>;
}
