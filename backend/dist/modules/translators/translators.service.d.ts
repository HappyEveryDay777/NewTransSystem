import { Repository } from 'typeorm';
import { Translator } from './entities/translator.entity';
import { CreateTranslatorDto } from './dto/create-translator.dto';
export declare class TranslatorsService {
    private readonly translatorsRepository;
    constructor(translatorsRepository: Repository<Translator>);
    create(dto: CreateTranslatorDto): Promise<Translator>;
    findAll(): Promise<Translator[]>;
    findMatching(sourceLanguage: string, targetLanguage: string): Promise<Translator[]>;
    remove(id: string): Promise<void>;
}
