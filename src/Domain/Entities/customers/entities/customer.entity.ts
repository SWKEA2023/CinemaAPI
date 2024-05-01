import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Order } from '../../orders/entities/order.entity';

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

  @ApiPropertyOptional({
    type: Order,
    description: 'This is an optional property',
  })
  order: Order;
}
