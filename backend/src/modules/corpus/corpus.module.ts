import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorpusService } from './corpus.service';
import { CorpusController } from './corpus.controller';
import { CorpusEntry } from './entities/corpus-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CorpusEntry])],
  controllers: [CorpusController],
  providers: [CorpusService],
  exports: [CorpusService],
})
export class CorpusModule {}
