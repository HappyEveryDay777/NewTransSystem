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
exports.TmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tm_service_1 = require("./tm.service");
const create_tm_entry_dto_1 = require("./dto/create-tm-entry.dto");
const search_tm_dto_1 = require("./dto/search-tm.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let TmController = class TmController {
    tmService;
    constructor(tmService) {
        this.tmService = tmService;
    }
    create(createTmEntryDto) {
        return this.tmService.create(createTmEntryDto);
    }
    findAll() {
        return this.tmService.findAll();
    }
    search(searchDto) {
        return this.tmService.search(searchDto);
    }
    remove(id) {
        return this.tmService.remove(id);
    }
};
exports.TmController = TmController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create TM entry' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tm_entry_dto_1.CreateTmEntryDto]),
    __metadata("design:returntype", void 0)
], TmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all TM entries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search TM entries' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_tm_dto_1.SearchTmDto]),
    __metadata("design:returntype", void 0)
], TmController.prototype, "search", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete TM entry' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TmController.prototype, "remove", null);
exports.TmController = TmController = __decorate([
    (0, swagger_1.ApiTags)('translation-memory'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('translation-memory'),
    __metadata("design:paramtypes", [tm_service_1.TmService])
], TmController);
//# sourceMappingURL=tm.controller.js.map