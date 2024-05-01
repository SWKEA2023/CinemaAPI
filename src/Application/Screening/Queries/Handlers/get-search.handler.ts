import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSearchQuery } from '../Impl/get-search.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';

//Implementeres i de andre handlers
@QueryHandler(GetSearchQuery)
export class GetSearchHandler implements IQueryHandler<GetSearchQuery> {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(query: GetSearchQuery) {
    const searchResult = await this.esService.search({
      q: query.search,
    });
    return searchResult.hits.hits;
  }
}
