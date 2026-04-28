"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DeepLProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepLProvider = void 0;
const common_1 = require("@nestjs/common");
let DeepLProvider = DeepLProvider_1 = class DeepLProvider {
    logger = new common_1.Logger(DeepLProvider_1.name);
    async translate(text, sourceLang, targetLang) {
        this.logger.log(`DeepL translate: ${sourceLang} -> ${targetLang}`);
        return `[DeepL] ${text}`;
    }
};
exports.DeepLProvider = DeepLProvider;
exports.DeepLProvider = DeepLProvider = DeepLProvider_1 = __decorate([
    (0, common_1.Injectable)()
], DeepLProvider);
//# sourceMappingURL=deepl.provider.js.map