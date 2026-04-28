import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingsRepository: Repository<Setting>,
  ) {}

  async get(key: string): Promise<any> {
    const setting = await this.settingsRepository.findOne({ where: { key } });
    if (!setting) throw new NotFoundException(`Setting ${key} not found`);
    return setting.value;
  }

  async set(key: string, value: any, description?: string): Promise<Setting> {
    let setting = await this.settingsRepository.findOne({ where: { key } });
    if (setting) {
      setting.value = value;
    } else {
      setting = this.settingsRepository.create({ key, value, description });
    }
    return this.settingsRepository.save(setting);
  }

  async findAll(): Promise<Setting[]> {
    return this.settingsRepository.find();
  }
}
