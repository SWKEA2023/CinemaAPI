import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Customer extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  customerId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  phoneNumber: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  createdAt: Date;

@ApiProperty({
    type: Order,
    description: 'This is a required property'
})
order: Order;
}