import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Translator } from './entities/translator.entity';
import { CreateTranslatorDto } from './dto/create-translator.dto';

@Injectable()
export class TranslatorsService {
  constructor(
    @InjectRepository(Translator)
    private readonly translatorsRepository: Repository<Translator>,
  ) {}

  async create(dto: CreateTranslatorDto): Promise<Translator> {
    const translator = this.translatorsRepository.create(dto);
    return this.translatorsRepository.save(translator);
  }

  async findAll(): Promise<Translator[]> {
    return this.translatorsRepository.find({ relations: ['user'] });
  }

  async findMatching(sourceLanguage: string, targetLanguage: string): Promise<Translator[]> {
    const translators = await this.translatorsRepository.find({
      where: { isAvailable: true },
      relations: ['user'],
    });
    return translators.filter(
      (t) =>
        t.sourceLanguages.includes(sourceLanguage) &&
        t.targetLanguages.includes(targetLanguage),
    );
  }

  async remove(id: string): Promise<void> {
    await this.translatorsRepository.delete(id);
  }
}
