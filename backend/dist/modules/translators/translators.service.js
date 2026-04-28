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
exports.TranslatorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const translator_entity_1 = require("./entities/translator.entity");
let TranslatorsService = class TranslatorsService {
    translatorsRepository;
    constructor(translatorsRepository) {
        this.translatorsRepository = translatorsRepository;
    }
    async create(dto) {
        const translator = this.translatorsRepository.create(dto);
        return this.translatorsRepository.save(translator);
    }
    async findAll() {
        return this.translatorsRepository.find({ relations: ['user'] });
    }
    async findMatching(sourceLanguage, targetLanguage) {
        const translators = await this.translatorsRepository.find({
            where: { isAvailable: true },
            relations: ['user'],
        });
        return translators.filter((t) => t.sourceLanguages.includes(sourceLanguage) &&
            t.targetLanguages.includes(targetLanguage));
    }
    async remove(id) {
        await this.translatorsRepository.delete(id);
    }
};
exports.TranslatorsService = TranslatorsService;
exports.TranslatorsService = TranslatorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(translator_entity_1.Translator)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TranslatorsService);
//# sourceMappingURL=translators.service.js.map