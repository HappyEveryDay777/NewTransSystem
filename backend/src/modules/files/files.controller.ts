import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Query,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { memoryStorage } from 'multer';
import { FilesService } from './files.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('files')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload a file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        projectId: { type: 'string' },
        sourceLanguage: { type: 'string' },
        targetLanguage: { type: 'string' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('projectId') projectId: string,
    @Body('sourceLanguage') sourceLanguage?: string,
    @Body('targetLanguage') targetLanguage?: string,
  ) {
    return this.filesService.uploadFile(file, projectId, sourceLanguage, targetLanguage);
  }

  @Get()
  @ApiOperation({ summary: 'Get all files' })
  findAll(@Query('projectId') projectId?: string) {
    return this.filesService.findAll(projectId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get file by ID' })
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(id);
  }

  @Get(':id/download')
  @ApiOperation({ summary: 'Get file download URL' })
  getDownloadUrl(@Param('id') id: string) {
    return this.filesService.getDownloadUrl(id);
  }

  @Get(':id/segments')
  @ApiOperation({ summary: 'Get file segments' })
  getSegments(@Param('id') id: string) {
    return this.filesService.getSegments(id);
  }

  @Patch('segments/:segmentId')
  @ApiOperation({ summary: 'Update segment translation' })
  updateSegment(
    @Param('segmentId') segmentId: string,
    @Body('targetText') targetText: string,
  ) {
    return this.filesService.updateSegment(segmentId, targetText);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete file' })
  remove(@Param('id') id: string) {
    return this.filesService.remove(id);
  }
}
