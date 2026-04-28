import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';

import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import minioConfig from './config/minio.config';
import redisConfig from './config/redis.config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { FilesModule } from './modules/files/files.module';
import { TmModule } from './modules/translation-memory/tm.module';
import { TermbaseModule } from './modules/termbase/termbase.module';
import { CorpusModule } from './modules/corpus/corpus.module';
import { QaModule } from './modules/qa/qa.module';
import { MtModule } from './modules/mt/mt.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ReportsModule } from './modules/reports/reports.module';
import { SettingsModule } from './modules/settings/settings.module';
import { TranslatorsModule } from './modules/translators/translators.module';
import { StorageModule } from './modules/storage/storage.module';
import { EventsModule } from './modules/events/events.module';

import { User } from './modules/users/entities/user.entity';
import { Client } from './modules/clients/entities/client.entity';
import { Project } from './modules/projects/entities/project.entity';
import { WorkflowStep } from './modules/projects/entities/workflow-step.entity';
import { Task } from './modules/tasks/entities/task.entity';
import { FileEntity } from './modules/files/entities/file.entity';
import { FileVersion } from './modules/files/entities/file-version.entity';
import { Segment } from './modules/files/entities/segment.entity';
import { TmEntry } from './modules/translation-memory/entities/tm-entry.entity';
import { Term } from './modules/termbase/entities/term.entity';
import { CorpusEntry } from './modules/corpus/entities/corpus-entry.entity';
import { QaIssue } from './modules/qa/entities/qa-issue.entity';
import { Notification } from './modules/notifications/entities/notification.entity';
import { Setting } from './modules/settings/entities/setting.entity';
import { Translator } from './modules/translators/entities/translator.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig, minioConfig, redisConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        entities: [
          User,
          Client,
          Project,
          WorkflowStep,
          Task,
          FileEntity,
          FileVersion,
          Segment,
          TmEntry,
          Term,
          CorpusEntry,
          QaIssue,
          Notification,
          Setting,
          Translator,
        ],
        synchronize: true,
        logging: process.env.NODE_ENV === 'development',
      }),
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot(),
    AuthModule,
    UsersModule,
    ClientsModule,
    ProjectsModule,
    TasksModule,
    FilesModule,
    TmModule,
    TermbaseModule,
    CorpusModule,
    QaModule,
    MtModule,
    NotificationsModule,
    ReportsModule,
    SettingsModule,
    TranslatorsModule,
    StorageModule,
    EventsModule,
  ],
})
export class AppModule {}
