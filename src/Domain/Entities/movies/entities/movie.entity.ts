import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Movie extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  movieId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  director: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  year: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  language: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  duration: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  pegi: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  imageURL: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  trailerURL: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  createdAt: Date;
}
