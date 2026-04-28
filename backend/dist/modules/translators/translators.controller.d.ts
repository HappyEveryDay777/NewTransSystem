import { TranslatorsService } from './translators.service';
import { CreateTranslatorDto } from './dto/create-translator.dto';
export declare class TranslatorsController {
    private readonly translatorsService;
    constructor(translatorsService: TranslatorsService);
    create(dto: CreateTranslatorDto): Promise<import("./entities/translator.entity").Translator>;
    findAll(): Promise<import("./entities/translator.entity").Translator[]>;
    findMatching(sourceLanguage: string, targetLanguage: string): Promise<import("./entities/translator.entity").Translator[]>;
    remove(id: string): Promise<void>;
}
