"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermbaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const termbase_service_1 = require("./termbase.service");
const termbase_controller_1 = require("./termbase.controller");
const term_entity_1 = require("./entities/term.entity");
let TermbaseModule = class TermbaseModule {
};
exports.TermbaseModule = TermbaseModule;
exports.TermbaseModule = TermbaseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([term_entity_1.Term])],
        controllers: [termbase_controller_1.TermbaseController],
        providers: [termbase_service_1.TermbaseService],
        exports: [termbase_service_1.TermbaseService],
    })
], TermbaseModule);
//# sourceMappingURL=termbase.module.js.map