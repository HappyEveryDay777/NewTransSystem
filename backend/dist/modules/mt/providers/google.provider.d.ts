export declare class GoogleProvider {
    private readonly logger;
    translate(text: string, sourceLang: string, targetLang: string): Promise<string>;
}
