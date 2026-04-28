import { BaseEntity } from '../../../common/entities/base.entity';
export declare class Setting extends BaseEntity {
    key: string;
    value: any;
    description: string;
    isPublic: boolean;
}
