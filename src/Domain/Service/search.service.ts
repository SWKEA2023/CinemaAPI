import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllQuery } from 'src/Application/Search/Queries/Impl/get-all.query';
import { GetSearchQuery } from 'src/Application/Search/Queries/Impl/get-search.query';

@Injectable()
export class SearchService {
  constructor(private readonly queryBus: QueryBus) {}

  getSearch(search: string) {
    return this.queryBus.execute(new GetSearchQuery(search));
  }

  getAll(index: string) {
    return this.queryBus.execute(new GetAllQuery(index));
  }
}
