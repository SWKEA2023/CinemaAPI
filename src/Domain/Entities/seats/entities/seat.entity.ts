import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class Seat {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  seatId: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  seatRow: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  seatNumber: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  price: number;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  fkHallId: number;
}
