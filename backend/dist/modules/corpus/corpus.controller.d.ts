import { CorpusService } from './corpus.service';
import { CreateCorpusEntryDto } from './dto/create-corpus-entry.dto';
import type { Response } from 'express';
export declare class CorpusController {
    private readonly corpusService;
    constructor(corpusService: CorpusService);
    create(dto: CreateCorpusEntryDto): Promise<import("./entities/corpus-entry.entity").CorpusEntry>;
    findAll(): Promise<import("./entities/corpus-entry.entity").CorpusEntry[]>;
    exportTmx(sourceLanguage: string, targetLanguage: string, res: Response): Promise<void>;
    remove(id: string): Promise<void>;
}
