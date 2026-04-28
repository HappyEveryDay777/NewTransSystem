import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(dto: CreateNotificationDto): Promise<import("./entities/notification.entity").Notification>;
    findMy(userId: string): Promise<import("./entities/notification.entity").Notification[]>;
    markAsRead(id: string): Promise<import("./entities/notification.entity").Notification>;
    markAllRead(userId: string): Promise<void>;
}
