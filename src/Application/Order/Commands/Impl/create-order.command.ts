import { Ticket } from 'src/Domain/Entities/ticket.entity';

/**
 * Create Order Command
 */
export class CreateOrderCommand {
  /**
   * This class is a command for creating an order
   * @param {Ticket} order
   */
  constructor(public readonly order: Ticket) {}
}
