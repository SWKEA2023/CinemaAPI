import { double } from '@elastic/elasticsearch/lib/api/types';

export class Seat {
  constructor(
    public seatId: number,
    public seatRow: number,
    public seatNumber: number,
    public price: double,
    public createdAt: string,
    public fkHallId: number,
  ) {}
}
