import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

@Injectable()
export class StorageService implements OnModuleInit {
  private readonly logger = new Logger(StorageService.name);
  private client: Minio.Client;
  private bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.bucket = this.configService.get<string>('minio.bucket') || 'tms-files';
    this.client = new Minio.Client({
      endPoint: this.configService.get<string>('minio.endpoint') || 'localhost',
      port: this.configService.get<number>('minio.port') || 9000,
      useSSL: this.configService.get<boolean>('minio.useSSL') || false,
      accessKey: this.configService.get<string>('minio.accessKey') || 'minioadmin',
      secretKey: this.configService.get<string>('minio.secretKey') || 'minioadmin',
    });
  }

  async onModuleInit() {
    try {
      const exists = await this.client.bucketExists(this.bucket);
      if (!exists) {
        await this.client.makeBucket(this.bucket, 'us-east-1');
        this.logger.log(`Created MinIO bucket: ${this.bucket}`);
      }
    } catch (err) {
      this.logger.warn(`MinIO initialization failed (continuing): ${(err as Error).message}`);
    }
  }

  async uploadFile(
    objectName: string,
    buffer: Buffer,
    mimeType: string,
  ): Promise<string> {
    await this.client.putObject(this.bucket, objectName, buffer, buffer.length, {
      'Content-Type': mimeType,
    });
    return objectName;
  }

  async getFileUrl(objectName: string, expirySeconds = 3600): Promise<string> {
    return this.client.presignedGetObject(this.bucket, objectName, expirySeconds);
  }

  async deleteFile(objectName: string): Promise<void> {
    await this.client.removeObject(this.bucket, objectName);
  }

  async getFileStream(objectName: string): Promise<NodeJS.ReadableStream> {
    return this.client.getObject(this.bucket, objectName);
  }
}
