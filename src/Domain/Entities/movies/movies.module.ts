import { Module } from '@nestjs/common';
import { MoviesService } from '../../Service/movies.service';
import { MoviesController } from '../../../Interface/Controllers/movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
