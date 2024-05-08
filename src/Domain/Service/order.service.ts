import { Injectable } from '@nestjs/common';
import { Order } from '../Entities/order.entity';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from 'src/Application/Order/Commands/Impl/create-order.command';

@Injectable()
export class OrderService {
  constructor(private readonly commandBus: CommandBus) {}

  create(order: Order): any {
    console.log(order);

    return this.commandBus.execute(new CreateOrderCommand(order));
  }
}
