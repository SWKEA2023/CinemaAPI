import { Seat } from './seat.entity';

import { ApiProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty({ description: 'Ticket ID' })
  public ticketId: number;

  @ApiProperty({ description: 'Foreign key to Screening ID' })
  public fkScreeningId: number;

  @ApiProperty({ type: [Seat], description: 'Seats details' })
  public seats: Seat[];

  constructor(ticketId: number, fkScreeningId: number, seats: Seat[]) {
    this.ticketId = ticketId;
    this.fkScreeningId = fkScreeningId;
    this.seats = seats;
  }
}
