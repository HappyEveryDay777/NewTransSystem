import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('terms')
export class Term extends BaseEntity {
  @Column()
  sourceTerm: string;

  @Column()
  targetTerm: string;

  @Column()
  sourceLanguage: string;

  @Column()
  targetLanguage: string;

  @Column({ nullable: true })
  clientId: string;

  @Column({ nullable: true })
  domain: string;

  @Column({ nullable: true })
  definition: string;

  @Column({ nullable: true })
  context: string;

  @Column({ default: false })
  isForbidden: boolean;

  @Column({ nullable: true })
  notes: string;

  @Column({ default: true })
  isActive: boolean;
}
