import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { Ticket } from '../../tickets/entities/ticket.entity';

export class Order {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  orderId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  createdAt: Date;

  @ApiProperty({
    type: Product,
    description: 'This is a required property',
  })
  products: Product[];

@ApiProperty({
  type: Ticket,
  description: 'This is a required property',
})
tickets: Ticket[];
}
