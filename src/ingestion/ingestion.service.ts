import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IngestionService {
  async trigger(documentId: string) {
    const response = await axios.post('http://python-backend/ingest', { documentId });
    return response.data;
  }
}
