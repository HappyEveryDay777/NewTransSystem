import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TranslatorsService } from './translators.service';
import { CreateTranslatorDto } from './dto/create-translator.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('translators')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('translators')
export class TranslatorsController {
  constructor(private readonly translatorsService: TranslatorsService) {}

  @Post()
  @ApiOperation({ summary: 'Register a translator profile' })
  create(@Body() dto: CreateTranslatorDto) {
    return this.translatorsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all translators' })
  findAll() {
    return this.translatorsService.findAll();
  }

  @Get('match')
  @ApiOperation({ summary: 'Find matching translators for a language pair' })
  @ApiQuery({ name: 'sourceLanguage', required: true })
  @ApiQuery({ name: 'targetLanguage', required: true })
  findMatching(
    @Query('sourceLanguage') sourceLanguage: string,
    @Query('targetLanguage') targetLanguage: string,
  ) {
    return this.translatorsService.findMatching(sourceLanguage, targetLanguage);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete translator profile' })
  remove(@Param('id') id: string) {
    return this.translatorsService.remove(id);
  }
}
