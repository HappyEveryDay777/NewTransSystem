import { MtService } from './mt.service';
import { TranslateDto } from './dto/translate.dto';
export declare class MtController {
    private readonly mtService;
    constructor(mtService: MtService);
    translate(dto: TranslateDto): Promise<{
        text: string;
        provider: string;
    }>;
}
