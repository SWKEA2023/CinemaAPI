import { Module } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { OrderController } from '../../Interface/Controllers/order.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './Commands/Handlers';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'ORDER_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: process.env.RMQ_QUEUE,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, ...CommandHandlers],
})
export class OrderModule {}
