import { Controller, Post, Body } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
  constructor(private service: IngestionService) {}

  @Post('trigger')
  trigger(@Body() body) {
    return this.service.trigger(body.documentId);
  }
}
