import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from 'src/Application/Order/Commands/Impl/create-order.command';
import { Ticket } from '../Entities/ticket.entity';

@Injectable()
export class OrderService {
  constructor(private readonly commandBus: CommandBus) {}

  create(order: Ticket): any {
    return this.commandBus.execute(new CreateOrderCommand(order));
  }
}
