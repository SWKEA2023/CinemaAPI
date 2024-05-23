import { QueryHandler } from '@nestjs/cqrs';
import { GetHallsQuery } from '../Impl/get-halls.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Hall } from 'src/Domain/Entities/hall.entity';

/**
 * This class is a query handler for getting halls
 */
@QueryHandler(GetHallsQuery)
export class GetHallsHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute() {
    const response = await this.esService.search({
      index: 'screenings',
      body: {
        _source: ['hall'],
        query: {
          match_all: {},
        },
      },
    });

    const uniqueHallsMap = new Map<number, Hall>();

    response.hits.hits.forEach((hit) => {
      const hall = (hit._source as { hall: Hall }).hall;
      if (hall && hall.hallId) {
        uniqueHallsMap.set(hall.hallId, hall);
      }
    });

    const uniqueMovies = Array.from(uniqueHallsMap.values());

    return uniqueMovies;
  }
}
