import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('clients')
export class Client extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  companyName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  country: string;

  @Column({ type: 'jsonb', nullable: true })
  languagePairs: { source: string; target: string }[];

  @Column({ type: 'jsonb', nullable: true })
  priceList: Record<string, number>;

  @Column({ type: 'jsonb', nullable: true })
  contractInfo: Record<string, any>;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  notes: string;
}
