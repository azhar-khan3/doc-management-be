import {
  Controller, Post, Get, Delete, Param, UseInterceptors, UploadedFile, Body, Req
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { DocumentsService } from './documents.service';
import { v4 as uuid } from 'uuid';
import * as path from 'path';

@Controller('documents')
export class DocumentsController {
  constructor(private service: DocumentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (_, file, cb) => {
        cb(null, `${uuid()}${path.extname(file.originalname)}`);
      },
    }),
  }))
  async upload(@UploadedFile() file, @Body() body, @Req() req) {
    return this.service.create({
      ...body,
      filePath: file.filename,
      uploadedBy: req.user.userId,
    });
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
