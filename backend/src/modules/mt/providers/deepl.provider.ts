import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DeepLProvider {
  private readonly logger = new Logger(DeepLProvider.name);

  async translate(text: string, sourceLang: string, targetLang: string): Promise<string> {
    this.logger.log(`DeepL translate: ${sourceLang} -> ${targetLang}`);
    return `[DeepL] ${text}`;
  }
}
