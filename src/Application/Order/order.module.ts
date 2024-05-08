import { Module } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { OrderController } from '../../Interface/Controllers/order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
