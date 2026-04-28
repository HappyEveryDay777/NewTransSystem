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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtService = void 0;
const common_1 = require("@nestjs/common");
const deepl_provider_1 = require("./providers/deepl.provider");
const google_provider_1 = require("./providers/google.provider");
const translate_dto_1 = require("./dto/translate.dto");
let MtService = class MtService {
    deepLProvider;
    googleProvider;
    constructor(deepLProvider, googleProvider) {
        this.deepLProvider = deepLProvider;
        this.googleProvider = googleProvider;
    }
    async translate(dto) {
        let translatedText;
        if (dto.provider === translate_dto_1.MtProvider.GOOGLE) {
            translatedText = await this.googleProvider.translate(dto.text, dto.sourceLanguage, dto.targetLanguage);
        }
        else {
            translatedText = await this.deepLProvider.translate(dto.text, dto.sourceLanguage, dto.targetLanguage);
        }
        return { text: translatedText, provider: dto.provider };
    }
};
exports.MtService = MtService;
exports.MtService = MtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [deepl_provider_1.DeepLProvider,
        google_provider_1.GoogleProvider])
], MtService);
//# sourceMappingURL=mt.service.js.map