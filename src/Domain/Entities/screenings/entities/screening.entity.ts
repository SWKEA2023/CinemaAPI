import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Hall } from '../../halls/entities/hall.entity';
import { Movie } from '../../movies/entities/movie.entity';

export class Screening {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  screeningId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  date: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  startTime: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  endTime: Date;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  createdAt: Date;

  @ApiProperty({
    type: Hall,
    description: 'This is a required property',
  })
  hall: Hall;

  @ApiProperty({
    type: Movie,
    description: 'This is a required property',
  })
  movie: Movie;
}
