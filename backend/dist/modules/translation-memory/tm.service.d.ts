import { Repository } from 'typeorm';
import { TmEntry } from './entities/tm-entry.entity';
import { CreateTmEntryDto } from './dto/create-tm-entry.dto';
import { SearchTmDto } from './dto/search-tm.dto';
export declare class TmService {
    private readonly tmRepository;
    constructor(tmRepository: Repository<TmEntry>);
    create(createTmEntryDto: CreateTmEntryDto): Promise<TmEntry>;
    findAll(): Promise<TmEntry[]>;
    search(searchDto: SearchTmDto): Promise<Array<TmEntry & {
        matchRate: number;
    }>>;
    private calculateSimilarity;
    private levenshtein;
    remove(id: string): Promise<void>;
}
