import { Ticket } from 'src/Domain/Entities/ticket.entity';

export class CreateOrderCommand {
  constructor(public readonly order: Ticket) {}
}
