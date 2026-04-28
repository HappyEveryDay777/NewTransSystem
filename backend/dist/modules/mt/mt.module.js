"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtModule = void 0;
const common_1 = require("@nestjs/common");
const mt_service_1 = require("./mt.service");
const mt_controller_1 = require("./mt.controller");
const deepl_provider_1 = require("./providers/deepl.provider");
const google_provider_1 = require("./providers/google.provider");
let MtModule = class MtModule {
};
exports.MtModule = MtModule;
exports.MtModule = MtModule = __decorate([
    (0, common_1.Module)({
        controllers: [mt_controller_1.MtController],
        providers: [mt_service_1.MtService, deepl_provider_1.DeepLProvider, google_provider_1.GoogleProvider],
        exports: [mt_service_1.MtService],
    })
], MtModule);
//# sourceMappingURL=mt.module.js.map