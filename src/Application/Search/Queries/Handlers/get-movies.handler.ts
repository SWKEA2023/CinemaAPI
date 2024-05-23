import { Get } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { GetMoviesQuery } from '../Impl/get-movies.query';
import { Movie } from 'src/Domain/Entities/movie.entity';

/**
 * This class is a query handler for getting movies
 */
@QueryHandler(GetMoviesQuery)
export class GetMoviesHandler implements IQueryHandler<GetMoviesQuery> {
  constructor(private readonly esService: ElasticsearchService) {}

  @Get()
  async execute() {
    const response = await this.esService.search({
      index: 'screenings',
      body: {
        _source: ['movie'],
        query: {
          match_all: {},
        },
      },
    });

    const uniqueMoviesMap = new Map<number, Movie>();

    response.hits.hits.forEach((hit) => {
      const movie = (hit._source as { movie: Movie }).movie;
      if (movie && movie.movieId) {
        uniqueMoviesMap.set(movie.movieId, movie);
      }
    });

    const uniqueMovies = Array.from(uniqueMoviesMap.values());

    return uniqueMovies;
  }
}
