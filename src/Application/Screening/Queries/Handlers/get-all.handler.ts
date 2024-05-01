import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { GetAllQuery } from '../Impl/get-all.query';

//Implementeres i de andre handlers
@QueryHandler(GetAllQuery)
export class GetAllHandler implements IQueryHandler<GetAllQuery> {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(query: GetAllQuery) {
    console.log('in Handler');
    
    console.log(query.index);
    console.log(query);
    
    const searchResult = await this.esService.search({ index: query.index });
    return searchResult.hits.hits;
  }
}
