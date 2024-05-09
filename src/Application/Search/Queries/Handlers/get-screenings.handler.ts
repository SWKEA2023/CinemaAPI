import { QueryHandler } from '@nestjs/cqrs';
import { GetScreeningsQuery } from '../Impl/get-screenings.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@QueryHandler(GetScreeningsQuery)
export class GetScreeningsHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute() {
    const searchResult = await this.esService.search({ index: 'screenings' });
    return searchResult.hits.hits.map((hit) => hit._source);
  }
}
