import { Body, Controller, Inject, Post } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Order } from 'src/Domain/Entities/order.entity';
import { ClientProxy } from '@nestjs/microservices';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject('ORDER_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Order,
    description: 'The order has been successfully created',
  })
  async create(@Body() order: Order) {
    const response = await this.orderService.create(order);
    this.client.emit('created_order', order);
    return response;
  }
}
