import { Module } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { OrderController } from '../../Interface/Controllers/order.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './Commands/Handlers';

@Module({
  imports: [CqrsModule],
  controllers: [OrderController],
  providers: [OrderService, ...CommandHandlers],
})
export class OrderModule {}
