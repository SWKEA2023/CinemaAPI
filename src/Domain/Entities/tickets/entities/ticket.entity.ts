import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Seat } from '../../seats/entities/seat.entity';
import { Screening } from '../../screenings/entities/screening.entity';

export class Ticket {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  ticketId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  createdAt: Date;

  @ApiProperty({
    type: Screening,
    description: 'This is a required property',
  })
  screening: Screening;

  @ApiProperty({
    type: Seat,
    description: 'This is a required property',
  })
  seat: Seat;
}
