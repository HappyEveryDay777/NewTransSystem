"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const translators_service_1 = require("./translators.service");
const translators_controller_1 = require("./translators.controller");
const translator_entity_1 = require("./entities/translator.entity");
let TranslatorsModule = class TranslatorsModule {
};
exports.TranslatorsModule = TranslatorsModule;
exports.TranslatorsModule = TranslatorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([translator_entity_1.Translator])],
        controllers: [translators_controller_1.TranslatorsController],
        providers: [translators_service_1.TranslatorsService],
        exports: [translators_service_1.TranslatorsService],
    })
], TranslatorsModule);
//# sourceMappingURL=translators.module.js.map