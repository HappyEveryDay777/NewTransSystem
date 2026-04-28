import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Term } from './entities/term.entity';
import { CreateTermDto } from './dto/create-term.dto';

@Injectable()
export class TermbaseService {
  constructor(
    @InjectRepository(Term)
    private readonly termRepository: Repository<Term>,
  ) {}

  async create(dto: CreateTermDto): Promise<Term> {
    const term = this.termRepository.create(dto);
    return this.termRepository.save(term);
  }

  async findAll(search?: string): Promise<Term[]> {
    if (search) {
      return this.termRepository.find({
        where: [{ sourceTerm: Like(`%${search}%`) }, { targetTerm: Like(`%${search}%`) }],
      });
    }
    return this.termRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.termRepository.delete(id);
  }
}
