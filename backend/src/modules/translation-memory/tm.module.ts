import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmService } from './tm.service';
import { TmController } from './tm.controller';
import { TmEntry } from './entities/tm-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TmEntry])],
  controllers: [TmController],
  providers: [TmService],
  exports: [TmService],
})
export class TmModule {}
