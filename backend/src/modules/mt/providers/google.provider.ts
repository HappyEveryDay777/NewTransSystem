import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GoogleProvider {
  private readonly logger = new Logger(GoogleProvider.name);

  async translate(text: string, sourceLang: string, targetLang: string): Promise<string> {
    this.logger.log(`Google Translate: ${sourceLang} -> ${targetLang}`);
    return `[Google] ${text}`;
  }
}
