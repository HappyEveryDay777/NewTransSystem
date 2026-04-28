import { TermbaseService } from './termbase.service';
import { CreateTermDto } from './dto/create-term.dto';
export declare class TermbaseController {
    private readonly termbaseService;
    constructor(termbaseService: TermbaseService);
    create(createTermDto: CreateTermDto): Promise<import("./entities/term.entity").Term>;
    findAll(search?: string): Promise<import("./entities/term.entity").Term[]>;
    remove(id: string): Promise<void>;
}
