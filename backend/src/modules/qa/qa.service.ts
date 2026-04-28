import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QaIssue, QAIssueStatus } from './entities/qa-issue.entity';
import { CreateQaIssueDto } from './dto/create-qa-issue.dto';

@Injectable()
export class QaService {
  constructor(
    @InjectRepository(QaIssue)
    private readonly qaRepository: Repository<QaIssue>,
  ) {}

  async create(dto: CreateQaIssueDto): Promise<QaIssue> {
    const issue = this.qaRepository.create(dto);
    return this.qaRepository.save(issue);
  }

  async findAll(segmentId?: string): Promise<QaIssue[]> {
    if (segmentId) {
      return this.qaRepository.find({ where: { segmentId } });
    }
    return this.qaRepository.find();
  }

  async resolve(id: string, resolvedBy: string, resolution: string): Promise<QaIssue> {
    const issue = await this.qaRepository.findOneOrFail({ where: { id } });
    issue.status = QAIssueStatus.RESOLVED;
    issue.resolvedBy = resolvedBy;
    issue.resolution = resolution;
    return this.qaRepository.save(issue);
  }

  async remove(id: string): Promise<void> {
    await this.qaRepository.delete(id);
  }
}
