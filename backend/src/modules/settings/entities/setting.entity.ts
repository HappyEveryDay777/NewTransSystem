import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('settings')
export class Setting extends BaseEntity {
  @Column({ unique: true })
  key: string;

  @Column({ type: 'jsonb' })
  value: any;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  isPublic: boolean;
}
