import { ApiProperty } from '@nestjs/swagger';

export class Seat {
  @ApiProperty({ description: 'Seat ID' })
  public seatId: number;

  @ApiProperty({ description: 'Seat row number' })
  public seatRow: number;

  @ApiProperty({ description: 'Seat number' })
  public seatNumber: number;

  @ApiProperty({ description: 'Price of the seat' })
  public price: number;

  @ApiProperty({ description: 'Date and time when the seat was created' })
  public createdAt: string;

  @ApiProperty({ description: 'Foreign key to Hall ID' })
  public fkHallId: number;

  constructor(
    seatId: number,
    seatRow: number,
    seatNumber: number,
    price: number,
    createdAt: string,
    fkHallId: number,
  ) {
    this.seatId = seatId;
    this.seatRow = seatRow;
    this.seatNumber = seatNumber;
    this.price = price;
    this.createdAt = createdAt;
    this.fkHallId = fkHallId;
  }
}
