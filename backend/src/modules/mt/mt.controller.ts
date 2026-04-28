import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { MtService } from './mt.service';
import { TranslateDto } from './dto/translate.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('mt')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('mt')
export class MtController {
  constructor(private readonly mtService: MtService) {}

  @Post('translate')
  @ApiOperation({ summary: 'Translate text using MT provider' })
  translate(@Body() dto: TranslateDto) {
    return this.mtService.translate(dto);
  }
}
