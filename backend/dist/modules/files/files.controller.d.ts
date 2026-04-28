import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File, projectId: string, sourceLanguage?: string, targetLanguage?: string): Promise<import("./entities/file.entity").FileEntity>;
    findAll(projectId?: string): Promise<import("./entities/file.entity").FileEntity[]>;
    findOne(id: string): Promise<import("./entities/file.entity").FileEntity>;
    getDownloadUrl(id: string): Promise<string>;
    getSegments(id: string): Promise<import("./entities/segment.entity").Segment[]>;
    updateSegment(segmentId: string, targetText: string): Promise<import("./entities/segment.entity").Segment>;
    remove(id: string): Promise<void>;
}
