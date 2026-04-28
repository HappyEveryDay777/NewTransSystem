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
exports.CorpusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const corpus_service_1 = require("./corpus.service");
const create_corpus_entry_dto_1 = require("./dto/create-corpus-entry.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let CorpusController = class CorpusController {
    corpusService;
    constructor(corpusService) {
        this.corpusService = corpusService;
    }
    create(dto) {
        return this.corpusService.create(dto);
    }
    findAll() {
        return this.corpusService.findAll();
    }
    async exportTmx(sourceLanguage, targetLanguage, res) {
        const tmx = await this.corpusService.exportTmx(sourceLanguage, targetLanguage);
        res.setHeader('Content-Type', 'application/xml');
        res.setHeader('Content-Disposition', 'attachment; filename="corpus.tmx"');
        res.send(tmx);
    }
    remove(id) {
        return this.corpusService.remove(id);
    }
};
exports.CorpusController = CorpusController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create corpus entry' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_corpus_entry_dto_1.CreateCorpusEntryDto]),
    __metadata("design:returntype", void 0)
], CorpusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all corpus entries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CorpusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('export/tmx'),
    (0, swagger_1.ApiOperation)({ summary: 'Export corpus as TMX' }),
    (0, swagger_1.ApiQuery)({ name: 'sourceLanguage', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'targetLanguage', required: true }),
    __param(0, (0, common_1.Query)('sourceLanguage')),
    __param(1, (0, common_1.Query)('targetLanguage')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CorpusController.prototype, "exportTmx", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete corpus entry' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorpusController.prototype, "remove", null);
exports.CorpusController = CorpusController = __decorate([
    (0, swagger_1.ApiTags)('corpus'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('corpus'),
    __metadata("design:paramtypes", [corpus_service_1.CorpusService])
], CorpusController);
//# sourceMappingURL=corpus.controller.js.map