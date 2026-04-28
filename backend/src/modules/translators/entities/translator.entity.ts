import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';

@Entity('translators')
export class Translator extends BaseEntity {
  @Column()
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'simple-array' })
  sourceLanguages: string[];

  @Column({ type: 'simple-array' })
  targetLanguages: string[];

  @Column({ type: 'simple-array', nullable: true })
  domains: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  ratePerWord: number;

  @Column({ nullable: true })
  currency: string;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'integer', default: 0 })
  totalProjectsCompleted: number;

  @Column({ type: 'float', default: 0 })
  onTimeRate: number;

  @Column({ type: 'jsonb', nullable: true })
  certifications: { name: string; issuedBy: string; year: number }[];

  @Column({ type: 'integer', default: 0 })
  currentWorkload: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ nullable: true })
  bio: string;
}
