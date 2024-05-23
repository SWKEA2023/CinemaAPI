import { Ticket } from 'src/Domain/Entities/ticket.entity';

/**
 * This class is a command for creating an order
 */
export class CreateOrderCommand {
  constructor(public readonly order: Ticket) {}
}
