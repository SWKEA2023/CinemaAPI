import { Seat } from './seat.entity';

import { ApiProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty({ description: 'Foreign key to Screening ID' })
  public fkScreeningId: number;

  @ApiProperty({ type: [Seat], description: 'Seats details' })
  public seats: Seat[];

  constructor(fkScreeningId: number, seats: Seat[]) {
    this.fkScreeningId = fkScreeningId;
    this.seats = seats;
  }
}
