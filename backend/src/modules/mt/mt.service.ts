import { Injectable } from '@nestjs/common';
import { DeepLProvider } from './providers/deepl.provider';
import { GoogleProvider } from './providers/google.provider';
import { TranslateDto, MtProvider } from './dto/translate.dto';

@Injectable()
export class MtService {
  constructor(
    private readonly deepLProvider: DeepLProvider,
    private readonly googleProvider: GoogleProvider,
  ) {}

  async translate(dto: TranslateDto): Promise<{ text: string; provider: string }> {
    let translatedText: string;
    if (dto.provider === MtProvider.GOOGLE) {
      translatedText = await this.googleProvider.translate(
        dto.text,
        dto.sourceLanguage,
        dto.targetLanguage,
      );
    } else {
      translatedText = await this.deepLProvider.translate(
        dto.text,
        dto.sourceLanguage,
        dto.targetLanguage,
      );
    }
    return { text: translatedText, provider: dto.provider };
  }
}
