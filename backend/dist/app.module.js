"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const database_config_1 = __importDefault(require("./config/database.config"));
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
const minio_config_1 = __importDefault(require("./config/minio.config"));
const redis_config_1 = __importDefault(require("./config/redis.config"));
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const clients_module_1 = require("./modules/clients/clients.module");
const projects_module_1 = require("./modules/projects/projects.module");
const tasks_module_1 = require("./modules/tasks/tasks.module");
const files_module_1 = require("./modules/files/files.module");
const tm_module_1 = require("./modules/translation-memory/tm.module");
const termbase_module_1 = require("./modules/termbase/termbase.module");
const corpus_module_1 = require("./modules/corpus/corpus.module");
const qa_module_1 = require("./modules/qa/qa.module");
const mt_module_1 = require("./modules/mt/mt.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const reports_module_1 = require("./modules/reports/reports.module");
const settings_module_1 = require("./modules/settings/settings.module");
const translators_module_1 = require("./modules/translators/translators.module");
const storage_module_1 = require("./modules/storage/storage.module");
const events_module_1 = require("./modules/events/events.module");
const user_entity_1 = require("./modules/users/entities/user.entity");
const client_entity_1 = require("./modules/clients/entities/client.entity");
const project_entity_1 = require("./modules/projects/entities/project.entity");
const workflow_step_entity_1 = require("./modules/projects/entities/workflow-step.entity");
const task_entity_1 = require("./modules/tasks/entities/task.entity");
const file_entity_1 = require("./modules/files/entities/file.entity");
const file_version_entity_1 = require("./modules/files/entities/file-version.entity");
const segment_entity_1 = require("./modules/files/entities/segment.entity");
const tm_entry_entity_1 = require("./modules/translation-memory/entities/tm-entry.entity");
const term_entity_1 = require("./modules/termbase/entities/term.entity");
const corpus_entry_entity_1 = require("./modules/corpus/entities/corpus-entry.entity");
const qa_issue_entity_1 = require("./modules/qa/entities/qa-issue.entity");
const notification_entity_1 = require("./modules/notifications/entities/notification.entity");
const setting_entity_1 = require("./modules/settings/entities/setting.entity");
const translator_entity_1 = require("./modules/translators/entities/translator.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default, jwt_config_1.default, minio_config_1.default, redis_config_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('database.host'),
                    port: configService.get('database.port'),
                    username: configService.get('database.username'),
                    password: configService.get('database.password'),
                    database: configService.get('database.database'),
                    entities: [
                        user_entity_1.User,
                        client_entity_1.Client,
                        project_entity_1.Project,
                        workflow_step_entity_1.WorkflowStep,
                        task_entity_1.Task,
                        file_entity_1.FileEntity,
                        file_version_entity_1.FileVersion,
                        segment_entity_1.Segment,
                        tm_entry_entity_1.TmEntry,
                        term_entity_1.Term,
                        corpus_entry_entity_1.CorpusEntry,
                        qa_issue_entity_1.QaIssue,
                        notification_entity_1.Notification,
                        setting_entity_1.Setting,
                        translator_entity_1.Translator,
                    ],
                    synchronize: true,
                    logging: process.env.NODE_ENV === 'development',
                }),
                inject: [config_1.ConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            clients_module_1.ClientsModule,
            projects_module_1.ProjectsModule,
            tasks_module_1.TasksModule,
            files_module_1.FilesModule,
            tm_module_1.TmModule,
            termbase_module_1.TermbaseModule,
            corpus_module_1.CorpusModule,
            qa_module_1.QaModule,
            mt_module_1.MtModule,
            notifications_module_1.NotificationsModule,
            reports_module_1.ReportsModule,
            settings_module_1.SettingsModule,
            translators_module_1.TranslatorsModule,
            storage_module_1.StorageModule,
            events_module_1.EventsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map