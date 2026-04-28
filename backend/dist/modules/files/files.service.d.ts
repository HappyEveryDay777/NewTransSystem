import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';
import { Segment } from './entities/segment.entity';
import { StorageService } from '../storage/storage.service';
export declare class FilesService {
    private readonly filesRepository;
    private readonly segmentsRepository;
    private readonly storageService;
    constructor(filesRepository: Repository<FileEntity>, segmentsRepository: Repository<Segment>, storageService: StorageService);
    uploadFile(file: Express.Multer.File, projectId: string, sourceLanguage?: string, targetLanguage?: string): Promise<FileEntity>;
    findAll(projectId?: string): Promise<FileEntity[]>;
    findOne(id: string): Promise<FileEntity>;
    getDownloadUrl(id: string): Promise<string>;
    remove(id: string): Promise<void>;
    getSegments(fileId: string): Promise<Segment[]>;
    updateSegment(id: string, targetText: string): Promise<Segment>;
}
