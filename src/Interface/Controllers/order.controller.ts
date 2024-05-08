import { Controller, Post } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Order } from 'src/Domain/Entities/order.entity';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Order,
    description: 'The order has been successfully created',
  })
  async create(order: Order): Promise<Order> {
    return this.orderService.create(order);
  }
}
