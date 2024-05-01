import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSearchQuery } from '../Impl/get-search.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';

@QueryHandler(GetSearchQuery)
export class GetSearchHandler implements IQueryHandler<GetSearchQuery> {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}
  async execute(query: GetSearchQuery) {
    const searchResult = await this.esService.search({   index: 'movies',   q: query.search }); console.log(searchResult.hits.hits)
    return searchResult.hits.hits;
  }
}
