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
exports.TmEntry = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
let TmEntry = class TmEntry extends base_entity_1.BaseEntity {
    sourceText;
    targetText;
    sourceLanguage;
    targetLanguage;
    clientId;
    projectId;
    domain;
    usageCount;
    createdBy;
    isVerified;
    metadata;
};
exports.TmEntry = TmEntry;
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], TmEntry.prototype, "sourceText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], TmEntry.prototype, "targetText", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TmEntry.prototype, "sourceLanguage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TmEntry.prototype, "targetLanguage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TmEntry.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TmEntry.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TmEntry.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], TmEntry.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TmEntry.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TmEntry.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], TmEntry.prototype, "metadata", void 0);
exports.TmEntry = TmEntry = __decorate([
    (0, typeorm_1.Entity)('tm_entries')
], TmEntry);
//# sourceMappingURL=tm-entry.entity.js.map