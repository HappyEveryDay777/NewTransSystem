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
exports.TermbaseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const termbase_service_1 = require("./termbase.service");
const create_term_dto_1 = require("./dto/create-term.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let TermbaseController = class TermbaseController {
    termbaseService;
    constructor(termbaseService) {
        this.termbaseService = termbaseService;
    }
    create(createTermDto) {
        return this.termbaseService.create(createTermDto);
    }
    findAll(search) {
        return this.termbaseService.findAll(search);
    }
    remove(id) {
        return this.termbaseService.remove(id);
    }
};
exports.TermbaseController = TermbaseController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a term' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_term_dto_1.CreateTermDto]),
    __metadata("design:returntype", void 0)
], TermbaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all terms' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TermbaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete term' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TermbaseController.prototype, "remove", null);
exports.TermbaseController = TermbaseController = __decorate([
    (0, swagger_1.ApiTags)('termbase'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('termbase'),
    __metadata("design:paramtypes", [termbase_service_1.TermbaseService])
], TermbaseController);
//# sourceMappingURL=termbase.controller.js.map