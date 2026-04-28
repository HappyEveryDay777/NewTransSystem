"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tm_service_1 = require("./tm.service");
const tm_controller_1 = require("./tm.controller");
const tm_entry_entity_1 = require("./entities/tm-entry.entity");
let TmModule = class TmModule {
};
exports.TmModule = TmModule;
exports.TmModule = TmModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tm_entry_entity_1.TmEntry])],
        controllers: [tm_controller_1.TmController],
        providers: [tm_service_1.TmService],
        exports: [tm_service_1.TmService],
    })
], TmModule);
//# sourceMappingURL=tm.module.js.map