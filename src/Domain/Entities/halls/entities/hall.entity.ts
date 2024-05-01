import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AggregateRoot } from '@nestjs/cqrs';
import { Seat } from '../../seats/entities/seat.entity';

export class Hall extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  hallId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  hallName: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  seatRows: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  seatNumber: number;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  createdAt: Date;

 @ApiProperty({
  type: Seat, 
  description: 'This is a required property',
 })
seats: Seat[];
}
