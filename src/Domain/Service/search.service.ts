import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetHallsQuery } from 'src/Application/Search/Queries/Impl/get-halls.query';
import { GetMoviesQuery } from 'src/Application/Search/Queries/Impl/get-movies.query';
import { GetScreeningsQuery } from 'src/Application/Search/Queries/Impl/get-screenings.query';
import { GetSearchQuery } from 'src/Application/Search/Queries/Impl/get-search.query';

@Injectable()
export class SearchService {
  constructor(private readonly queryBus: QueryBus) {}

  getScreenings() {
    return this.queryBus.execute(new GetScreeningsQuery());
  }

  getSearch(search: string) {
    return this.queryBus.execute(new GetSearchQuery(search));
  }

  getMovies() {
    return this.queryBus.execute(new GetMoviesQuery());
  }

  getHalls() {
    return this.queryBus.execute(new GetHallsQuery());
  }
}
