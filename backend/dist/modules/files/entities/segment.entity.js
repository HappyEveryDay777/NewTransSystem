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
exports.Segment = exports.SegmentStatus = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
const file_entity_1 = require("./file.entity");
var SegmentStatus;
(function (SegmentStatus) {
    SegmentStatus["UNTRANSLATED"] = "untranslated";
    SegmentStatus["DRAFT"] = "draft";
    SegmentStatus["TRANSLATED"] = "translated";
    SegmentStatus["REVIEWED"] = "reviewed";
    SegmentStatus["APPROVED"] = "approved";
})(SegmentStatus || (exports.SegmentStatus = SegmentStatus = {}));
let Segment = class Segment extends base_entity_1.BaseEntity {
    fileId;
    file;
    segmentNumber;
    sourceText;
    targetText;
    status;
    tmMatchRate;
    tmMatchSource;
    mtSuggestion;
    comments;
};
exports.Segment = Segment;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Segment.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_entity_1.FileEntity),
    (0, typeorm_1.JoinColumn)({ name: 'fileId' }),
    __metadata("design:type", file_entity_1.FileEntity)
], Segment.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Segment.prototype, "segmentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Segment.prototype, "sourceText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Segment.prototype, "targetText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: SegmentStatus, default: SegmentStatus.UNTRANSLATED }),
    __metadata("design:type", String)
], Segment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Segment.prototype, "tmMatchRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Segment.prototype, "tmMatchSource", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Segment.prototype, "mtSuggestion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Segment.prototype, "comments", void 0);
exports.Segment = Segment = __decorate([
    (0, typeorm_1.Entity)('segments')
], Segment);
//# sourceMappingURL=segment.entity.js.map