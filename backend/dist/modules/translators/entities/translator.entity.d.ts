import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
export declare class Translator extends BaseEntity {
    userId: string;
    user: User;
    sourceLanguages: string[];
    targetLanguages: string[];
    domains: string[];
    ratePerWord: number;
    currency: string;
    rating: number;
    totalProjectsCompleted: number;
    onTimeRate: number;
    certifications: {
        name: string;
        issuedBy: string;
        year: number;
    }[];
    currentWorkload: number;
    isAvailable: boolean;
    bio: string;
}
