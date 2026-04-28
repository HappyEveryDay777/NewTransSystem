import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async getProjectSummary() {
    const total = await this.projectsRepository.count();
    const byStatus = await this.projectsRepository
      .createQueryBuilder('p')
      .select('p.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .groupBy('p.status')
      .getRawMany();
    return { total, byStatus };
  }

  async getTaskSummary() {
    const total = await this.tasksRepository.count();
    const byStatus = await this.tasksRepository
      .createQueryBuilder('t')
      .select('t.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .groupBy('t.status')
      .getRawMany();
    return { total, byStatus };
  }

  async getDashboard() {
    const [projects, tasks] = await Promise.all([
      this.getProjectSummary(),
      this.getTaskSummary(),
    ]);
    return { projects, tasks };
  }
}
