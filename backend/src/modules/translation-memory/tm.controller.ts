import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { TmService } from './tm.service';
import { CreateTmEntryDto } from './dto/create-tm-entry.dto';
import { SearchTmDto } from './dto/search-tm.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('translation-memory')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('translation-memory')
export class TmController {
  constructor(private readonly tmService: TmService) {}

  @Post()
  @ApiOperation({ summary: 'Create TM entry' })
  create(@Body() createTmEntryDto: CreateTmEntryDto) {
    return this.tmService.create(createTmEntryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all TM entries' })
  findAll() {
    return this.tmService.findAll();
  }

  @Post('search')
  @ApiOperation({ summary: 'Search TM entries' })
  search(@Body() searchDto: SearchTmDto) {
    return this.tmService.search(searchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete TM entry' })
  remove(@Param('id') id: string) {
    return this.tmService.remove(id);
  }
}
