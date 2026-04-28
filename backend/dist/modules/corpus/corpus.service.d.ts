import { Repository } from 'typeorm';
import { CorpusEntry } from './entities/corpus-entry.entity';
import { CreateCorpusEntryDto } from './dto/create-corpus-entry.dto';
export declare class CorpusService {
    private readonly corpusRepository;
    constructor(corpusRepository: Repository<CorpusEntry>);
    create(dto: CreateCorpusEntryDto): Promise<CorpusEntry>;
    findAll(): Promise<CorpusEntry[]>;
    exportTmx(sourceLanguage: string, targetLanguage: string): Promise<string>;
    remove(id: string): Promise<void>;
}
