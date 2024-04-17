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
    const result = await this.esService.search({
      index: this.configService.get('ES_INDEX_TARGET'),
      q: query,
      // body: {
      //   query: {
      //     match: {
      //       title: q,
      //     },
      //   },
      // },
    });

    return result.hits.hits;
  }
}
