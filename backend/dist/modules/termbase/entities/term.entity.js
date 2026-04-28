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
exports.Term = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
let Term = class Term extends base_entity_1.BaseEntity {
    sourceTerm;
    targetTerm;
    sourceLanguage;
    targetLanguage;
    clientId;
    domain;
    definition;
    context;
    isForbidden;
    notes;
    isActive;
};
exports.Term = Term;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Term.prototype, "sourceTerm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Term.prototype, "targetTerm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Term.prototype, "sourceLanguage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Term.prototype, "targetLanguage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Term.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Term.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Term.prototype, "definition", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Term.prototype, "context", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Term.prototype, "isForbidden", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Term.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Term.prototype, "isActive", void 0);
exports.Term = Term = __decorate([
    (0, typeorm_1.Entity)('terms')
], Term);
//# sourceMappingURL=term.entity.js.map