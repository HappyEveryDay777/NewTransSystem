import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslatorsService } from './translators.service';
import { TranslatorsController } from './translators.controller';
import { Translator } from './entities/translator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Translator])],
  controllers: [TranslatorsController],
  providers: [TranslatorsService],
  exports: [TranslatorsService],
})
export class TranslatorsModule {}
