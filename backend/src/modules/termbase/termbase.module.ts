import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermbaseService } from './termbase.service';
import { TermbaseController } from './termbase.controller';
import { Term } from './entities/term.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Term])],
  controllers: [TermbaseController],
  providers: [TermbaseService],
  exports: [TermbaseService],
})
export class TermbaseModule {}
