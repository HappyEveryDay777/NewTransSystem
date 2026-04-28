import { BaseEntity } from '../../../common/entities/base.entity';
import { FileEntity } from './file.entity';
export declare class FileVersion extends BaseEntity {
    fileId: string;
    file: FileEntity;
    version: number;
    storagePath: string;
    uploadedBy: string;
    comment: string;
}
