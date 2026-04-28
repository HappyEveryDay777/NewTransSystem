import { Controller, Get, Post, Body, Delete, Param, UseGuards, Query, Res } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CorpusService } from './corpus.service';
import { CreateCorpusEntryDto } from './dto/create-corpus-entry.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import type { Response } from 'express';

@ApiTags('corpus')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('corpus')
export class CorpusController {
  constructor(private readonly corpusService: CorpusService) {}

  @Post()
  @ApiOperation({ summary: 'Create corpus entry' })
  create(@Body() dto: CreateCorpusEntryDto) {
    return this.corpusService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all corpus entries' })
  findAll() {
    return this.corpusService.findAll();
  }

  @Get('export/tmx')
  @ApiOperation({ summary: 'Export corpus as TMX' })
  @ApiQuery({ name: 'sourceLanguage', required: true })
  @ApiQuery({ name: 'targetLanguage', required: true })
  async exportTmx(
    @Query('sourceLanguage') sourceLanguage: string,
    @Query('targetLanguage') targetLanguage: string,
    @Res() res: Response,
  ) {
    const tmx = await this.corpusService.exportTmx(sourceLanguage, targetLanguage);
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Disposition', 'attachment; filename="corpus.tmx"');
    res.send(tmx);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete corpus entry' })
  remove(@Param('id') id: string) {
    return this.corpusService.remove(id);
  }
}
