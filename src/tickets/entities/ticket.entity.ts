import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/orders/entities/order.entity';
import { Screening } from 'src/screenings/entities/screening.entity';
import { Seat } from 'src/seats/entities/seat.entity';

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
    type: Order,
    description: 'This is a required property',
  })
  order: Order;

  @ApiProperty({
    type: Seat,
    description: 'This is a required property',
  })
  seat: Seat;
}
