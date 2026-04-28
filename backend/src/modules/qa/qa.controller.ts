import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Patch } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { QaService } from './qa.service';
import { CreateQaIssueDto } from './dto/create-qa-issue.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('qa')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qa')
export class QaController {
  constructor(private readonly qaService: QaService) {}

  @Post()
  @ApiOperation({ summary: 'Create QA issue' })
  create(@Body() dto: CreateQaIssueDto) {
    return this.qaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get QA issues' })
  @ApiQuery({ name: 'segmentId', required: false })
  findAll(@Query('segmentId') segmentId?: string) {
    return this.qaService.findAll(segmentId);
  }

  @Patch(':id/resolve')
  @ApiOperation({ summary: 'Resolve QA issue' })
  resolve(
    @Param('id') id: string,
    @Body('resolvedBy') resolvedBy: string,
    @Body('resolution') resolution: string,
  ) {
    return this.qaService.resolve(id, resolvedBy, resolution);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete QA issue' })
  remove(@Param('id') id: string) {
    return this.qaService.remove(id);
  }
}
