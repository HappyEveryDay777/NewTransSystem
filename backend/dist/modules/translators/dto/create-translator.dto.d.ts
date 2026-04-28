export declare class CreateTranslatorDto {
    userId: string;
    sourceLanguages: string[];
    targetLanguages: string[];
    domains?: string[];
    ratePerWord?: number;
    currency?: string;
    bio?: string;
}
