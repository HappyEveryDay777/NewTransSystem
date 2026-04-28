import { BaseEntity } from '../../../common/entities/base.entity';
export declare class Notification extends BaseEntity {
    userId: string;
    type: string;
    title: string;
    content: string;
    data: Record<string, any>;
    isRead: boolean;
    relatedEntityType: string;
    relatedEntityId: string;
}
