export declare enum MtProvider {
    DEEPL = "deepl",
    GOOGLE = "google"
}
export declare class TranslateDto {
    text: string;
    sourceLanguage: string;
    targetLanguage: string;
    provider: MtProvider;
}
