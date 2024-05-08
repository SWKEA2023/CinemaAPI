import { Seat } from './seat.entity';

export class Ticket {
  constructor(
    public ticketId: number,
    public fkScreeningId: number,
    public seat: Seat,
  ) {}
}
