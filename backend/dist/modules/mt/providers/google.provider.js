"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GoogleProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleProvider = void 0;
const common_1 = require("@nestjs/common");
let GoogleProvider = GoogleProvider_1 = class GoogleProvider {
    logger = new common_1.Logger(GoogleProvider_1.name);
    async translate(text, sourceLang, targetLang) {
        this.logger.log(`Google Translate: ${sourceLang} -> ${targetLang}`);
        return `[Google] ${text}`;
    }
};
exports.GoogleProvider = GoogleProvider;
exports.GoogleProvider = GoogleProvider = GoogleProvider_1 = __decorate([
    (0, common_1.Injectable)()
], GoogleProvider);
//# sourceMappingURL=google.provider.js.map