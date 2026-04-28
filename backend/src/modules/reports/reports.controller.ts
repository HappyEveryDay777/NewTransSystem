import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get dashboard summary' })
  getDashboard() {
    return this.reportsService.getDashboard();
  }

  @Get('projects')
  @ApiOperation({ summary: 'Get project report' })
  getProjectReport() {
    return this.reportsService.getProjectSummary();
  }

  @Get('tasks')
  @ApiOperation({ summary: 'Get task report' })
  getTaskReport() {
    return this.reportsService.getTaskSummary();
  }
}
