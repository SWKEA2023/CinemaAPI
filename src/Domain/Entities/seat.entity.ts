import {ApiProperty } from '@nestjs/swagger';

export class Seat {
  @ApiProperty({ description: 'Seat row number' })
  public seatRow: number;

  @ApiProperty({ description: 'Seat number' })
  public seatNumber: number;

  @ApiProperty({ description: 'Price of the seat' })
  public price: number;

  constructor(
    seatRow: number,
    seatNumber: number,
    price: number,
  ) {
    this.seatRow = seatRow;
    this.seatNumber = seatNumber;
    this.price = price;
  }
}
