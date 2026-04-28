"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorpusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const corpus_service_1 = require("./corpus.service");
const corpus_controller_1 = require("./corpus.controller");
const corpus_entry_entity_1 = require("./entities/corpus-entry.entity");
let CorpusModule = class CorpusModule {
};
exports.CorpusModule = CorpusModule;
exports.CorpusModule = CorpusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([corpus_entry_entity_1.CorpusEntry])],
        controllers: [corpus_controller_1.CorpusController],
        providers: [corpus_service_1.CorpusService],
        exports: [corpus_service_1.CorpusService],
    })
], CorpusModule);
//# sourceMappingURL=corpus.module.js.map