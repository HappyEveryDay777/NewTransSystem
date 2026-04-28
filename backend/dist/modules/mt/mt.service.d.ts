import { DeepLProvider } from './providers/deepl.provider';
import { GoogleProvider } from './providers/google.provider';
import { TranslateDto } from './dto/translate.dto';
export declare class MtService {
    private readonly deepLProvider;
    private readonly googleProvider;
    constructor(deepLProvider: DeepLProvider, googleProvider: GoogleProvider);
    translate(dto: TranslateDto): Promise<{
        text: string;
        provider: string;
    }>;
}
