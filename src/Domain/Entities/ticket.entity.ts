import { Order } from './order.entity';
import { Screening } from './screening.entity';
import { Seat } from './seat.entity';

import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty({ description: 'Order' })
  public order: Order;

  @ApiProperty({ description: 'Foreign key to Screening ID' })
  public fkScreeningId?: number;

  @ApiHideProperty()
  public screening: Screening;

  @ApiProperty({ type: [Seat], description: 'Seats details' })
  public seats: Seat[];

  constructor(
    seats: Seat[],
    order: Order,
    screening: Screening,
    fkScreeningId?: number,
  ) {
    this.order = order;
    this.screening = screening;
    this.fkScreeningId = fkScreeningId;
    this.seats = seats;
  }
}
