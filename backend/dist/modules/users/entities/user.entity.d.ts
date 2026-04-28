import { BaseEntity } from '../../../common/entities/base.entity';
import { Role } from '../../../common/enums/role.enum';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    name: string;
    role: Role;
    isActive: boolean;
    phone: string;
    avatar: string;
    preferences: Record<string, any>;
    hashPassword(): Promise<void>;
}
