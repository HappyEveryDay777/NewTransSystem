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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("../projects/entities/project.entity");
const task_entity_1 = require("../tasks/entities/task.entity");
let ReportsService = class ReportsService {
    projectsRepository;
    tasksRepository;
    constructor(projectsRepository, tasksRepository) {
        this.projectsRepository = projectsRepository;
        this.tasksRepository = tasksRepository;
    }
    async getProjectSummary() {
        const total = await this.projectsRepository.count();
        const byStatus = await this.projectsRepository
            .createQueryBuilder('p')
            .select('p.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .groupBy('p.status')
            .getRawMany();
        return { total, byStatus };
    }
    async getTaskSummary() {
        const total = await this.tasksRepository.count();
        const byStatus = await this.tasksRepository
            .createQueryBuilder('t')
            .select('t.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .groupBy('t.status')
            .getRawMany();
        return { total, byStatus };
    }
    async getDashboard() {
        const [projects, tasks] = await Promise.all([
            this.getProjectSummary(),
            this.getTaskSummary(),
        ]);
        return { projects, tasks };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map