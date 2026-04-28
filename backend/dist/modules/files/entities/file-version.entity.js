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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersion = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
const file_entity_1 = require("./file.entity");
let FileVersion = class FileVersion extends base_entity_1.BaseEntity {
    fileId;
    file;
    version;
    storagePath;
    uploadedBy;
    comment;
};
exports.FileVersion = FileVersion;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileVersion.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_entity_1.FileEntity),
    (0, typeorm_1.JoinColumn)({ name: 'fileId' }),
    __metadata("design:type", file_entity_1.FileEntity)
], FileVersion.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], FileVersion.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileVersion.prototype, "storagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FileVersion.prototype, "uploadedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FileVersion.prototype, "comment", void 0);
exports.FileVersion = FileVersion = __decorate([
    (0, typeorm_1.Entity)('file_versions')
], FileVersion);
//# sourceMappingURL=file-version.entity.js.map