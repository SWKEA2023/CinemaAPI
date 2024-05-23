import { QueryHandler } from '@nestjs/cqrs';
import { GetScreeningsQuery } from '../Impl/get-screenings.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';

/**
 * This class is a query handler for getting screenings
 */
@QueryHandler(GetScreeningsQuery)
export class GetScreeningsHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute() {
    const searchResult = await this.esService.search({ index: 'screenings' });
    return searchResult.hits.hits.map((hit) => hit._source);
  }
}
