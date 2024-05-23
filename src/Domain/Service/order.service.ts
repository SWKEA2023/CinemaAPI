import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from 'src/Application/Order/Commands/Impl/create-order.command';
import { Ticket } from '../Entities/ticket.entity';

@Injectable()
export class OrderService {
  constructor(private readonly commandBus: CommandBus) {}

  /**
   * Create Order
   * @param {Ticket}  order - A ticket param.
   * @returns {string} This is the result
   */
  async create(order: Ticket): Promise<Ticket> {
    return this.commandBus.execute(new CreateOrderCommand(order));
  }
}
