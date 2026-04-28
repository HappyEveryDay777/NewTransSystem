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
exports.TermbaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const term_entity_1 = require("./entities/term.entity");
let TermbaseService = class TermbaseService {
    termRepository;
    constructor(termRepository) {
        this.termRepository = termRepository;
    }
    async create(dto) {
        const term = this.termRepository.create(dto);
        return this.termRepository.save(term);
    }
    async findAll(search) {
        if (search) {
            return this.termRepository.find({
                where: [{ sourceTerm: (0, typeorm_2.Like)(`%${search}%`) }, { targetTerm: (0, typeorm_2.Like)(`%${search}%`) }],
            });
        }
        return this.termRepository.find();
    }
    async remove(id) {
        await this.termRepository.delete(id);
    }
};
exports.TermbaseService = TermbaseService;
exports.TermbaseService = TermbaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(term_entity_1.Term)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TermbaseService);
//# sourceMappingURL=termbase.service.js.map