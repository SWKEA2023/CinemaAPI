import { Module } from '@nestjs/common';
import { OrdersService } from '../../Service/orders.service';
import { OrdersController } from '../../../Interface/Controllers/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
