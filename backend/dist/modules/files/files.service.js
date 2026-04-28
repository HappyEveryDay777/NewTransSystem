"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("./entities/file.entity");
const segment_entity_1 = require("./entities/segment.entity");
const storage_service_1 = require("../storage/storage.service");
const uuid_1 = require("uuid");
let FilesService = class FilesService {
    filesRepository;
    segmentsRepository;
    storageService;
    constructor(filesRepository, segmentsRepository, storageService) {
        this.filesRepository = filesRepository;
        this.segmentsRepository = segmentsRepository;
        this.storageService = storageService;
    }
    async uploadFile(file, projectId, sourceLanguage, targetLanguage) {
        const objectName = `${projectId}/${(0, uuid_1.v4)()}-${file.originalname}`;
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
    async findAll(projectId) {
        if (projectId) {
            return this.filesRepository.find({ where: { projectId } });
        }
        return this.filesRepository.find();
    }
    async findOne(id) {
        const file = await this.filesRepository.findOne({ where: { id } });
        if (!file)
            throw new common_1.NotFoundException(`File ${id} not found`);
        return file;
    }
    async getDownloadUrl(id) {
        const file = await this.findOne(id);
        return this.storageService.getFileUrl(file.storagePath);
    }
    async remove(id) {
        const file = await this.findOne(id);
        await this.storageService.deleteFile(file.storagePath);
        await this.filesRepository.remove(file);
    }
    async getSegments(fileId) {
        return this.segmentsRepository.find({
            where: { fileId },
            order: { segmentNumber: 'ASC' },
        });
    }
    async updateSegment(id, targetText) {
        const segment = await this.segmentsRepository.findOne({ where: { id } });
        if (!segment)
            throw new common_1.NotFoundException(`Segment ${id} not found`);
        segment.targetText = targetText;
        return this.segmentsRepository.save(segment);
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.FileEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(segment_entity_1.Segment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        storage_service_1.StorageService])
], FilesService);
//# sourceMappingURL=files.service.js.map