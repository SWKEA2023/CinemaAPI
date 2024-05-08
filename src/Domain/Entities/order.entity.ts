import { Customer } from './costumer.entity';
import { Ticket } from './ticket.entity';

export class Order {
  constructor(
    public ticket: Ticket,
    public customer: Customer,
  ) {}
}
