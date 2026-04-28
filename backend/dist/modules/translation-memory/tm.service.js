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
exports.TmService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tm_entry_entity_1 = require("./entities/tm-entry.entity");
let TmService = class TmService {
    tmRepository;
    constructor(tmRepository) {
        this.tmRepository = tmRepository;
    }
    async create(createTmEntryDto) {
        const entry = this.tmRepository.create(createTmEntryDto);
        return this.tmRepository.save(entry);
    }
    async findAll() {
        return this.tmRepository.find();
    }
    async search(searchDto) {
        const { sourceText, sourceLanguage, targetLanguage, minMatchRate = 70 } = searchDto;
        const entries = await this.tmRepository.find({
            where: { sourceLanguage, targetLanguage },
        });
        const results = entries.map((entry) => {
            const matchRate = this.calculateSimilarity(sourceText, entry.sourceText);
            return { ...entry, matchRate };
        });
        return results
            .filter((r) => r.matchRate >= minMatchRate)
            .sort((a, b) => b.matchRate - a.matchRate)
            .slice(0, 10);
    }
    calculateSimilarity(a, b) {
        const longer = a.length > b.length ? a : b;
        const shorter = a.length > b.length ? b : a;
        if (longer.length === 0)
            return 100;
        const editDistance = this.levenshtein(longer, shorter);
        return Math.round(((longer.length - editDistance) / longer.length) * 100);
    }
    levenshtein(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
                }
            }
        }
        return matrix[b.length][a.length];
    }
    async remove(id) {
        await this.tmRepository.delete(id);
    }
};
exports.TmService = TmService;
exports.TmService = TmService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tm_entry_entity_1.TmEntry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TmService);
//# sourceMappingURL=tm.service.js.map