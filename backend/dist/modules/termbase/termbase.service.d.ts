import { Repository } from 'typeorm';
import { Term } from './entities/term.entity';
import { CreateTermDto } from './dto/create-term.dto';
export declare class TermbaseService {
    private readonly termRepository;
    constructor(termRepository: Repository<Term>);
    create(dto: CreateTermDto): Promise<Term>;
    findAll(search?: string): Promise<Term[]>;
    remove(id: string): Promise<void>;
}
