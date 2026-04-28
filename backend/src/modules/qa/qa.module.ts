import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaService } from './qa.service';
import { QaController } from './qa.controller';
import { QaIssue } from './entities/qa-issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QaIssue])],
  controllers: [QaController],
  providers: [QaService],
  exports: [QaService],
})
export class QaModule {}
