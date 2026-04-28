import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { FileEntity } from './file.entity';

@Entity('file_versions')
export class FileVersion extends BaseEntity {
  @Column()
  fileId: string;

  @ManyToOne(() => FileEntity)
  @JoinColumn({ name: 'fileId' })
  file: FileEntity;

  @Column({ type: 'integer' })
  version: number;

  @Column()
  storagePath: string;

  @Column({ nullable: true })
  uploadedBy: string;

  @Column({ nullable: true })
  comment: string;
}
