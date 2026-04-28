import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CorpusEntry } from './entities/corpus-entry.entity';
import { CreateCorpusEntryDto } from './dto/create-corpus-entry.dto';

@Injectable()
export class CorpusService {
  constructor(
    @InjectRepository(CorpusEntry)
    private readonly corpusRepository: Repository<CorpusEntry>,
  ) {}

  async create(dto: CreateCorpusEntryDto): Promise<CorpusEntry> {
    const entry = this.corpusRepository.create(dto);
    return this.corpusRepository.save(entry);
  }

  async findAll(): Promise<CorpusEntry[]> {
    return this.corpusRepository.find();
  }

  async exportTmx(sourceLanguage: string, targetLanguage: string): Promise<string> {
    const entries = await this.corpusRepository.find({
      where: { sourceLanguage, targetLanguage },
    });
    const tmxEntries = entries
      .map(
        (e) =>
          `  <tu><tuv xml:lang="${e.sourceLanguage}"><seg>${e.sourceText}</seg></tuv>` +
          `<tuv xml:lang="${e.targetLanguage}"><seg>${e.targetText}</seg></tuv></tu>`,
      )
      .join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<tmx version="1.4">\n<body>\n${tmxEntries}\n</body>\n</tmx>`;
  }

  async remove(id: string): Promise<void> {
    await this.corpusRepository.delete(id);
  }
}
