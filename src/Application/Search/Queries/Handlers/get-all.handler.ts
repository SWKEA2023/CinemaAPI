import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { GetAllQuery } from '../Impl/get-all.query';

/**
 * This class is a query handler for getting all data
 */
@QueryHandler(GetAllQuery)
export class GetAllHandler implements IQueryHandler<GetAllQuery> {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(query: GetAllQuery) {
    const searchResult = await this.esService.search({ index: query.index });
    return searchResult.hits.hits;
  }
}
