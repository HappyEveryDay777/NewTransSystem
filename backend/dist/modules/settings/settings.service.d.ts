import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';
export declare class SettingsService {
    private readonly settingsRepository;
    constructor(settingsRepository: Repository<Setting>);
    get(key: string): Promise<any>;
    set(key: string, value: any, description?: string): Promise<Setting>;
    findAll(): Promise<Setting[]>;
}
