import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class StorageService implements OnModuleInit {
    private readonly configService;
    private readonly logger;
    private client;
    private bucket;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
    uploadFile(objectName: string, buffer: Buffer, mimeType: string): Promise<string>;
    getFileUrl(objectName: string, expirySeconds?: number): Promise<string>;
    deleteFile(objectName: string): Promise<void>;
    getFileStream(objectName: string): Promise<NodeJS.ReadableStream>;
}
