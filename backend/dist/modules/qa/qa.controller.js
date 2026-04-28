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
exports.QaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qa_service_1 = require("./qa.service");
const create_qa_issue_dto_1 = require("./dto/create-qa-issue.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let QaController = class QaController {
    qaService;
    constructor(qaService) {
        this.qaService = qaService;
    }
    create(dto) {
        return this.qaService.create(dto);
    }
    findAll(segmentId) {
        return this.qaService.findAll(segmentId);
    }
    resolve(id, resolvedBy, resolution) {
        return this.qaService.resolve(id, resolvedBy, resolution);
    }
    remove(id) {
        return this.qaService.remove(id);
    }
};
exports.QaController = QaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create QA issue' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qa_issue_dto_1.CreateQaIssueDto]),
    __metadata("design:returntype", void 0)
], QaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get QA issues' }),
    (0, swagger_1.ApiQuery)({ name: 'segmentId', required: false }),
    __param(0, (0, common_1.Query)('segmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/resolve'),
    (0, swagger_1.ApiOperation)({ summary: 'Resolve QA issue' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('resolvedBy')),
    __param(2, (0, common_1.Body)('resolution')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], QaController.prototype, "resolve", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete QA issue' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QaController.prototype, "remove", null);
exports.QaController = QaController = __decorate([
    (0, swagger_1.ApiTags)('qa'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('qa'),
    __metadata("design:paramtypes", [qa_service_1.QaService])
], QaController);
//# sourceMappingURL=qa.controller.js.map