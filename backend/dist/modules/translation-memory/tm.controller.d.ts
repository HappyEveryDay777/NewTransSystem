import { TmService } from './tm.service';
import { CreateTmEntryDto } from './dto/create-tm-entry.dto';
import { SearchTmDto } from './dto/search-tm.dto';
export declare class TmController {
    private readonly tmService;
    constructor(tmService: TmService);
    create(createTmEntryDto: CreateTmEntryDto): Promise<import("./entities/tm-entry.entity").TmEntry>;
    findAll(): Promise<import("./entities/tm-entry.entity").TmEntry[]>;
    search(searchDto: SearchTmDto): Promise<(import("./entities/tm-entry.entity").TmEntry & {
        matchRate: number;
    })[]>;
    remove(id: string): Promise<void>;
}
