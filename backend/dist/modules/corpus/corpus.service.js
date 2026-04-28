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
exports.CorpusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const corpus_entry_entity_1 = require("./entities/corpus-entry.entity");
let CorpusService = class CorpusService {
    corpusRepository;
    constructor(corpusRepository) {
        this.corpusRepository = corpusRepository;
    }
    async create(dto) {
        const entry = this.corpusRepository.create(dto);
        return this.corpusRepository.save(entry);
    }
    async findAll() {
        return this.corpusRepository.find();
    }
    async exportTmx(sourceLanguage, targetLanguage) {
        const entries = await this.corpusRepository.find({
            where: { sourceLanguage, targetLanguage },
        });
        const tmxEntries = entries
            .map((e) => `  <tu><tuv xml:lang="${e.sourceLanguage}"><seg>${e.sourceText}</seg></tuv>` +
            `<tuv xml:lang="${e.targetLanguage}"><seg>${e.targetText}</seg></tuv></tu>`)
            .join('\n');
        return `<?xml version="1.0" encoding="UTF-8"?>\n<tmx version="1.4">\n<body>\n${tmxEntries}\n</body>\n</tmx>`;
    }
    async remove(id) {
        await this.corpusRepository.delete(id);
    }
};
exports.CorpusService = CorpusService;
exports.CorpusService = CorpusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(corpus_entry_entity_1.CorpusEntry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CorpusService);
//# sourceMappingURL=corpus.service.js.map