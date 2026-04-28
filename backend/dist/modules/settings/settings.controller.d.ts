import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): Promise<import("./entities/setting.entity").Setting[]>;
    get(key: string): Promise<any>;
    set(body: {
        key: string;
        value: any;
        description?: string;
    }): Promise<import("./entities/setting.entity").Setting>;
}
