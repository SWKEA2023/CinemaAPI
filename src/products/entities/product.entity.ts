import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/orders/entities/order.entity';

export class Product {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  productId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  productName: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  price: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  category: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is a optional property',
  })
  createdAt: Date;

  @ApiPropertyOptional({
    type: Order,
    description: 'This is a optional property',
  })
  orders: Order[];
}
