import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';
import { Segment } from './entities/segment.entity';
import { StorageService } from '../storage/storage.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly filesRepository: Repository<FileEntity>,
    @InjectRepository(Segment)
    private readonly segmentsRepository: Repository<Segment>,
    private readonly storageService: StorageService,
  ) {}

  async uploadFile(
    file: Express.Multer.File,
    projectId: string,
    sourceLanguage?: string,
    targetLanguage?: string,
  ): Promise<FileEntity> {
    const objectName = `${projectId}/${uuidv4()}-${file.originalname}`;
    await this.storageService.uploadFile(objectName, file.buffer, file.mimetype);
    const fileEntity = this.filesRepository.create({
      originalName: file.originalname,
      storagePath: objectName,
      mimeType: file.mimetype,
      size: file.size,
      projectId,
      sourceLanguage,
      targetLanguage,
    });
    return this.filesRepository.save(fileEntity);
  }

  async findAll(projectId?: string): Promise<FileEntity[]> {
    if (projectId) {
      return this.filesRepository.find({ where: { projectId } });
    }
    return this.filesRepository.find();
  }

  async findOne(id: string): Promise<FileEntity> {
    const file = await this.filesRepository.findOne({ where: { id } });
    if (!file) throw new NotFoundException(`File ${id} not found`);
    return file;
  }

  async getDownloadUrl(id: string): Promise<string> {
    const file = await this.findOne(id);
    return this.storageService.getFileUrl(file.storagePath);
  }

  async remove(id: string): Promise<void> {
    const file = await this.findOne(id);
    await this.storageService.deleteFile(file.storagePath);
    await this.filesRepository.remove(file);
  }

  async getSegments(fileId: string): Promise<Segment[]> {
    return this.segmentsRepository.find({
      where: { fileId },
      order: { segmentNumber: 'ASC' },
    });
  }

  async updateSegment(id: string, targetText: string): Promise<Segment> {
    const segment = await this.segmentsRepository.findOne({ where: { id } });
    if (!segment) throw new NotFoundException(`Segment ${id} not found`);
    segment.targetText = targetText;
    return this.segmentsRepository.save(segment);
  }
}
