import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TmEntry } from './entities/tm-entry.entity';
import { CreateTmEntryDto } from './dto/create-tm-entry.dto';
import { SearchTmDto } from './dto/search-tm.dto';

@Injectable()
export class TmService {
  constructor(
    @InjectRepository(TmEntry)
    private readonly tmRepository: Repository<TmEntry>,
  ) {}

  async create(createTmEntryDto: CreateTmEntryDto): Promise<TmEntry> {
    const entry = this.tmRepository.create(createTmEntryDto);
    return this.tmRepository.save(entry);
  }

  async findAll(): Promise<TmEntry[]> {
    return this.tmRepository.find();
  }

  async search(searchDto: SearchTmDto): Promise<Array<TmEntry & { matchRate: number }>> {
    const { sourceText, sourceLanguage, targetLanguage, minMatchRate = 70 } = searchDto;
    const entries = await this.tmRepository.find({
      where: { sourceLanguage, targetLanguage },
    });
    const results = entries.map((entry) => {
      const matchRate = this.calculateSimilarity(sourceText, entry.sourceText);
      return { ...entry, matchRate };
    });
    return results
      .filter((r) => r.matchRate >= minMatchRate)
      .sort((a, b) => b.matchRate - a.matchRate)
      .slice(0, 10);
  }

  private calculateSimilarity(a: string, b: string): number {
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    if (longer.length === 0) return 100;
    const editDistance = this.levenshtein(longer, shorter);
    return Math.round(((longer.length - editDistance) / longer.length) * 100);
  }

  private levenshtein(a: string, b: string): number {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1,
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  async remove(id: string): Promise<void> {
    await this.tmRepository.delete(id);
  }
}
