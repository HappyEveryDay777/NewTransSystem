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
exports.TranslatorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const translators_service_1 = require("./translators.service");
const create_translator_dto_1 = require("./dto/create-translator.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let TranslatorsController = class TranslatorsController {
    translatorsService;
    constructor(translatorsService) {
        this.translatorsService = translatorsService;
    }
    create(dto) {
        return this.translatorsService.create(dto);
    }
    findAll() {
        return this.translatorsService.findAll();
    }
    findMatching(sourceLanguage, targetLanguage) {
        return this.translatorsService.findMatching(sourceLanguage, targetLanguage);
    }
    remove(id) {
        return this.translatorsService.remove(id);
    }
};
exports.TranslatorsController = TranslatorsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register a translator profile' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_translator_dto_1.CreateTranslatorDto]),
    __metadata("design:returntype", void 0)
], TranslatorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all translators' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TranslatorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('match'),
    (0, swagger_1.ApiOperation)({ summary: 'Find matching translators for a language pair' }),
    (0, swagger_1.ApiQuery)({ name: 'sourceLanguage', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'targetLanguage', required: true }),
    __param(0, (0, common_1.Query)('sourceLanguage')),
    __param(1, (0, common_1.Query)('targetLanguage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TranslatorsController.prototype, "findMatching", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete translator profile' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TranslatorsController.prototype, "remove", null);
exports.TranslatorsController = TranslatorsController = __decorate([
    (0, swagger_1.ApiTags)('translators'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('translators'),
    __metadata("design:paramtypes", [translators_service_1.TranslatorsService])
], TranslatorsController);
//# sourceMappingURL=translators.controller.js.map