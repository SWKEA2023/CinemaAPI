import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MoviesService } from '../../Domain/Service/movies.service';
import { CreateMovieDto } from '../../Domain/Entities/movies/dto/create-movie.dto';
import { UpdateMovieDto } from '../../Domain/Entities/movies/dto/update-movie.dto';

@Controller()
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @MessagePattern('createMovie')
  create(@Payload() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @MessagePattern('findAllMovies')
  findAll() {
    return this.moviesService.findAll();
  }

  @MessagePattern('findOneMovie')
  findOne(@Payload() id: number) {
    return this.moviesService.findOne(id);
  }

  @MessagePattern('updateMovie')
  update(@Payload() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(updateMovieDto.id, updateMovieDto);
  }

  @MessagePattern('removeMovie')
  remove(@Payload() id: number) {
    return this.moviesService.remove(id);
  }
}
