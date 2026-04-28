import { Controller, Get, Post, Body, Delete, Param, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TermbaseService } from './termbase.service';
import { CreateTermDto } from './dto/create-term.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('termbase')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('termbase')
export class TermbaseController {
  constructor(private readonly termbaseService: TermbaseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a term' })
  create(@Body() createTermDto: CreateTermDto) {
    return this.termbaseService.create(createTermDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all terms' })
  @ApiQuery({ name: 'search', required: false })
  findAll(@Query('search') search?: string) {
    return this.termbaseService.findAll(search);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete term' })
  remove(@Param('id') id: string) {
    return this.termbaseService.remove(id);
  }
}
