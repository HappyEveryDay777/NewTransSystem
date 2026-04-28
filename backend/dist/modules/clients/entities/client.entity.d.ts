import { BaseEntity } from '../../../common/entities/base.entity';
export declare class Client extends BaseEntity {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    languagePairs: {
        source: string;
        target: string;
    }[];
    priceList: Record<string, number>;
    contractInfo: Record<string, any>;
    isActive: boolean;
    notes: string;
}
