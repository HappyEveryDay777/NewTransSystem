import { Module } from '@nestjs/common';
import { MtService } from './mt.service';
import { MtController } from './mt.controller';
import { DeepLProvider } from './providers/deepl.provider';
import { GoogleProvider } from './providers/google.provider';

@Module({
  controllers: [MtController],
  providers: [MtService, DeepLProvider, GoogleProvider],
  exports: [MtService],
})
export class MtModule {}
